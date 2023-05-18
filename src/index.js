import { Factory, Stack, ProcessChain } from 'process-mgmt/src/structures.js';
import { RateVisitor } from 'process-mgmt/src/visit/rate_visitor.js';
import { LinearAlgebra } from 'process-mgmt/src/visit/linear_algebra_visitor.js';
import { RateGraphRenderer } from 'process-mgmt/src/visit/rate_graph_renderer.js';
import { ProcessCountVisitor } from 'process-mgmt/src/visit/process_count_visitor.js';

let data = null;

const ROW_A = 'row_a';
const ROW_B = 'row_b';

class Modifiers {
    constructor() {
        this.duration = 1;
        this.output = 1;
    }
}

class GraphInputs {
    constructor() {
        this.requirements = []; // [Stack]
        this.imports = []; // [Item]
        this.exports = []; // [Item]
        this.processes = []; // [Process]
        this.default_factory_groups = {}; // factory_group.id => factory type
        this.process_modifiers = {}; // process.id => Modifiers
    }

    getFactoryForProcess(process) {
        if (this.default_factory_groups[process.factory_group.id]) {
            return this.default_factory_groups[process.factory_group.id].modify(1, 1);
        }
        let all_suitable_factories = factoriesForFactoryGroup(process.factory_group.id);
        if (all_suitable_factories.length > 0) {
            return all_suitable_factories[0];
        }
        return new Factory('__default__', '__default__', null, 1, 1);
    }

    add_requirement(req) {
        if (this.contains_requirement(req.item)) {
            let i = this.requirements.findIndex(stack => stack.item.id === req.item.id);
            this.requirements[i] = req;
        } else {
            this.requirements.push(req);
        }
    }
    setFactoryForFactoryGroup(factory_group_id, factory) {
        this.default_factory_groups[factory_group_id] = factory;
    }

    add_process(process) {
        if (!this.contains_process(process)) {
            this.processes.push(process);
        }
    }

    addImport(item) {
        if (!this.imports.some(i => i.id === item.id)) {
            this.imports.push(item);
        }
    }
    removeImport(item) {
        let i = this.imports.findIndex(i => i.id === item.id);
        if (i >= 0) {
            this.imports.splice(i, 1);
        }
    }

    addExport(item) {
        if (!this.exports.some(i => i.id === item.id)) {
            this.exports.push(item);
        }
    }
    removeExport(item) {
        let i = this.exports.findIndex(i => i.id === item.id);
        if (i >= 0) {
            this.exports.splice(i, 1);
        }
    }

    contains_requirement(item) {
        return this.requirements.some(stack => stack.item.id === item.id);
    }

    contains_process(process) {
        return this.processes.some(proc => proc.id === process.id);
    }

    remove_requirement(item) {
        if (this.contains_requirement(item)){
            let i = this.requirements.findIndex(stack => stack.item.id === item.id);
            this.requirements.splice(i, 1);
        }
    }

    remove_process(process) {
        if (this.contains_process(process)) {
            let i = this.processes.findIndex(proc => proc.id === process.id);
            thid.processes.splice(i, 1);
        }
    }
}

let graph_inputs = new GraphInputs();

function handleDataSetChange(event) {
    console.log('attempting to load data: ', event.target.value);
    import(/* webpackChunkName: 'game_data' */ `process-mgmt/src/${event.target.value}/data.js`)
        .then(module => updateDataSet(module.default));
}

function updateDataSet(replacement_data) {
    data = replacement_data;
    document.getElementById('data_selection_display').textContent = data.game + ' at version ' + data.version;
    graph_inputs = new GraphInputs();
    inputsChanged();
}

function onEnter(e, cb) {
    if (e.type === 'keyup') {
        if (e.key === 'Enter') {
            cb(e);
        }
    } else {
        cb(e);
    }
}

let data_sets = {
    'dsp': 'DSP',
    'factorio-ab-1.1.38': 'Factorio AB (1.1.38)',
    'factorio-py-1.1.53': 'Factorio PY (1.1.53)',
    'factorio-ff-1.1.76': 'Factorio FF (1.1.76)',
    'plan-b-terraform': 'Plan B, Terraform',
    'satisfactory': "Satisfactory",
    'vt': "Voxel Tycoon",
};

let sets = document.getElementById('data_set');
Object.entries(data_sets).forEach(element => {
    let e = document.createElement('option');
    e.value = element[0];
    e.innerText = element[1];
    sets.appendChild(e);
});

function handleRequirementSelectionId(event) {
    onEnter(event, e => {
        performRequirementSearch(e.target.value, updateRequirementSearchResults);
    });
}

function changeTableBody(table_id, tbody_id, create_tbody_cb) {
    let table = document.getElementById(table_id);
    let old_tbody = document.getElementById(tbody_id);
    let replacement = document.createElement('tbody');
    replacement.id = tbody_id;

    create_tbody_cb(replacement);

    table.replaceChild(replacement, old_tbody);
}

function inputsChanged() {
    changeTableBody('input_table', 'input_table_tbody', replacement => {
        let idx = 0;
        graph_inputs.requirements.forEach(stack => {
            let row = replacement.insertRow(-1);
            let buttons = setBgColour(row.insertCell(-1), idx);
            buttons.appendChild(createItemRemovalButton(stack));
            setBgColour(row.insertCell(-1), idx).textContent = stack.quantity;
            setBgColour(row.insertCell(-1), idx).textContent = stack.item.id;
            idx++;
        });
        let import_export = (item, button_cb, text) => {
            let row = replacement.insertRow(-1);
            let buttons = setBgColour(row.insertCell(-1), idx);
            buttons.appendChild(button_cb(item));
            setBgColour(row.insertCell(-1), idx).textContent = text;
            setBgColour(row.insertCell(-1), idx).textContent = item.id;
            idx++;
        };
        graph_inputs.imports.forEach(item => import_export(item, createImportRemovalButton, '(import)'));
        graph_inputs.exports.forEach(item => import_export(item, createExportRemovalButton, '(export)'));
    });
    changeProcessTableBody(graph_inputs.processes, 'processes_included', 'processes_included_tbody', (cell, process) => {
        let b = document.createElement('button');
        b.innerText = 'Remove';
        b.addEventListener('click', event => graph_inputs.remove_process(process));
        cell.appendChild(b);
    });
    updateDefaultFactoriesTable();
    updateMatrix(graph_inputs);
}

function factoriesForFactoryGroup(factory_group_id) {
    return Object.values(data.factories)
        .filter(factory => factory.groups.some(fg => fg.id === factory_group_id))
        .sort((fa, fb) => fa.duration_modifier > fb.duration_modifier);
}

function createFactorySelectForFactoryGroup(factory_group_id, selected_factory) {
    let select = document.createElement('select');
    factoriesForFactoryGroup(factory_group_id)
        .forEach(factory => {
            let opt = document.createElement('option');
            opt.innerText = factory.name;
            opt.value = factory.id;
            if (selected_factory && factory.id === selected_factory.id) {
                opt.selected = true;
            }
            select.appendChild(opt);
        });
    select.addEventListener('change', event => {
        graph_inputs.setFactoryForFactoryGroup(factory_group_id, data.factories[event.target.value]);
        inputsChanged();
    });
    return select;
}

function updateDefaultFactoriesTable() {
    changeTableBody('default_factories', 'default_factories_tbody', replacement => {
        graph_inputs.processes
            .map(p => p.factory_group.id)
            .reduce((prev, cur) => {
                if (!prev.includes(cur)) {
                    prev.push(cur);
                }
                return prev;
            }, [])
            .sort((a, b) => a.localeCompare(b))
            .forEach((factory_group_id, idx) => {
                let row = replacement.insertRow(-1);
                setBgColour(row.insertCell(-1), idx).innerText = factory_group_id;
                setBgColour(row.insertCell(-1), idx).appendChild(
                    createFactorySelectForFactoryGroup(
                        factory_group_id,
                        graph_inputs.default_factory_groups[factory_group_id])
                )
            });
    });
}

function createExportRemovalButton(item) {
    return createRequirementImportExportRemovalButton(item, () => graph_inputs.removeExport(item))
}
function createImportRemovalButton(item) {
    return createRequirementImportExportRemovalButton(item, () => graph_inputs.removeImport(item))
}
function createItemRemovalButton(stack) {
    return createRequirementImportExportRemovalButton(stack.item, () => graph_inputs.remove_requirement(stack.item))
}
function createRequirementImportExportRemovalButton(item, cb) {
    let button_of_removal = document.createElement('button');
    button_of_removal.textContent = 'Remove';
    button_of_removal.addEventListener('click', e => {
        console.log('remove item:', item.id);
        cb();
        inputsChanged();
    });
    return button_of_removal;
}

function performRequirementSearch(str, cb) {
    if (str.length === 0) {
        clearItemSearch();
        return;
    }
    let search = new RegExp('.*' + str + '.*', 'i');
    cb(Object.values(data.items).filter(
        item => item.id.match(search) || item.name.match(search)
    ));
}

function setBgColour(cell, idx) {
    cell.className = (idx % 2 === 0 ? ROW_A : ROW_B);
    return cell;
}

function updateRequirementSearchResults(results) {
    changeTableBody('requirement_results', 'requirement_results_tbody', replacement => {
        results.sort((a, b) => a.id.localeCompare(b.id))
            .forEach((item, idx) => {
                let row = replacement.insertRow(-1);
                let buttons = setBgColour(row.insertCell(-1), idx);
                buttons.appendChild(createItemAddUpdateButton(item));
                buttons.appendChild(createItemImportButton(item));
                buttons.appendChild(createItemExportButton(item));
                setBgColour(row.insertCell(-1), idx).textContent = item.id;
            });
    });
}

function clearItemSearch() {
    updateRequirementSearchResults([]);
    document.getElementById('requirement_selection_id').value = '';
    document.getElementById('requirement_selection_quantity').value = '';
}

function createItemAddUpdateButton(item) {
    let button = document.createElement('button');
    button.textContent = graph_inputs.contains_requirement(item) ? 'Update Requirement' : 'Add Requirement';
    button.addEventListener('click', e => {
        let q = document.getElementById('requirement_selection_quantity').value;
        if (!q || q.length === 0) q = 1;
        console.log('add/update item:', item.id, q);
        graph_inputs.add_requirement(new Stack(item, Number(q)));
        inputsChanged();
        clearItemSearch();
    });
    return button;
}
function createItemImportButton(item) {
    let button = document.createElement('button');
    button.textContent = 'Import';
    button.addEventListener('click', e => {
        graph_inputs.addImport(item);
        inputsChanged();
        clearItemSearch();
    });
    return button;
}
function createItemExportButton(item) {
    let button = document.createElement('button');
    button.textContent = 'Export';
    button.addEventListener('click', e => {
        graph_inputs.addExport(item);
        inputsChanged();
        clearItemSearch();
    });
    return button;
}

function handleProcessSearchById(event) {
    onEnter(event, event => {
        let search = new RegExp('.*' + event.target.value + '.*', 'i');
        performProcessSearch(process => process.id.match(search));
    });
}

function handleProcessSearchByOutput(event) {
    onEnter(event, event => {
        let search = new RegExp('.*' + event.target.value + '.*', 'i');
        performProcessSearch(process => process.outputs.some(output => output.item.id.match(search)));
    });
}

function handleProcessSearchByInput(event) {
    onEnter(event, event => {
        let search = new RegExp('.*' + event.target.value + '.*', 'i');
        performProcessSearch(process => process.inputs.some(input => input.item.id.match(search)));
    });
}

function performProcessSearch(matcher) {
    let results = Object.values(data.processes)
        .filter(matcher)
        .sort((proc_a, proc_b) => proc_a.id.localeCompare(proc_b.id));
    updateProcessSearchResults(results, createProcessUseButton);
}

function updateProcessSearchResults(results) {
    changeProcessTableBody(results, "process_search_results", "process_search_results_tbody", createProcessUseButton);
}

function changeProcessTableBody(processes, table_id, tbody_id, button_cb) {
    changeTableBody(table_id, tbody_id, replacement =>{
        processes.forEach((process, idx) => {
            let max_rowspan = Math.max(process.inputs.length, process.outputs.length);
            for (let row_idx = 0; row_idx < max_rowspan; ++row_idx) {
                let row = replacement.insertRow(-1);
                if (row_idx === 0) {
                    let cells = []
                    cells.push(row.insertCell(-1), row.insertCell(-1), row.insertCell(-1), row.insertCell(-1));
                    button_cb(cells[0], process);
                    cells[1].innerText = process.id;
                    cells[2].innerText = process.factory_group.id;
                    cells[3].innerText = process.duration;
                    cells.forEach(c => setBgColour(c, idx).rowSpan = max_rowspan);
                }
                if (process.inputs.length > row_idx) {
                    setBgColour(row.insertCell(-1), idx).innerText = process.inputs[row_idx].item.id;
                    setBgColour(row.insertCell(-1), idx).innerText = process.inputs[row_idx].quantity;
                } else {
                    setBgColour(row.insertCell(-1), idx).innerText = '';
                    setBgColour(row.insertCell(-1), idx).innerText = '';
                }
                if (process.outputs.length > row_idx) {
                    setBgColour(row.insertCell(-1), idx).innerText = process.outputs[row_idx].item.id;
                    setBgColour(row.insertCell(-1), idx).innerText = process.outputs[row_idx].quantity;
                } else {
                    setBgColour(row.insertCell(-1), idx).innerText = '';
                    setBgColour(row.insertCell(-1), idx).innerText = '';
                }
            }
        });
    });
}

function createProcessUseButton(cell, process) {
    let button = document.createElement('button');
    button.innerText = 'Use';
    button.addEventListener('click', event => {
        graph_inputs.add_process(process);
        inputsChanged();
        changeTableBody("process_search_results", "process_search_results_tbody", () => {});
    });
    cell.appendChild(button);
}

function updateMatrix(inputs) {
    console.log('inputs', graph_inputs);

    if (graph_inputs.processes.length == 0) {
        // XXX Bodge the input when we have no prcesses.
        let bodge = {
            items: [],
            mtx: [],
            augmented_matrix: {
                getRow: (idx) => {
                    return { data: [bodge.mtx[idx]] };
                }
            }
        };
        graph_inputs.requirements.forEach(req => {
            bodge.items.push(req.item);
            bodge.mtx.push([1]);
        });
        graph_inputs.imports.forEach(imp => {
            bodge.items.push(imp);
            bodge.mtx.push([1]);
        });
        graph_inputs.exports.forEach(exp => {
            bodge.items.push(exp);
            bodge.mtx.push([-1]);
        });
        updateUnknownsTable(bodge);
        return;
    };
    let linear_algebra_visitor = new LinearAlgebra(inputs.requirements, inputs.imports.map(i => i.id), inputs.exports.map(i => i.id));
    linear_algebra_visitor.print_matricies = true;
    let chain = new ProcessChain(inputs.processes)
        .accept(new RateVisitor(proc => graph_inputs.getFactoryForProcess(proc)))
        .accept(new ProcessCountVisitor())
        .accept(linear_algebra_visitor);
    updateMatrixTable(linear_algebra_visitor, 'augmented_matrix_table', linear_algebra_visitor.augmented_matrix);
    updateMatrixTable(linear_algebra_visitor, 'reduced_matrix_table', linear_algebra_visitor.reduced_matrix);
    updateUnknownsTable(linear_algebra_visitor);


    let data = chain.accept(new RateGraphRenderer()).join('\n');
    console.log(data);

    document.getElementById('image_container').innerHTML = Viz(
        data,
        {
            format: 'svg',
            engine: 'dot'
        });
}

function updateMatrixTable(linear_algebra_visitor, table_id, matrix) {
    let table = document.getElementById(table_id);
    let tbody = document.createElement('tbody');
    let header_row = tbody.insertRow(-1);
    header_row.insertCell(-1).innerText = ' ';
    linear_algebra_visitor.columns.forEach(column => {
        header_row.insertCell(-1).innerText = column.process.id;
    });
    table.replaceChild(tbody, table.getElementsByTagName('tbody')[0]);

    for (let r = 0; r < matrix.data.length; ++r) {
        let row = setBgColour(tbody.insertRow(-1), r);
        setBgColour(row.insertCell(-1), r).innerText = linear_algebra_visitor.items[r].id;
        for (let c = 0; c < matrix.data[r].length; ++c) {
            setBgColour(row.insertCell(-1), r).innerText =  matrix.data[r][c];
        }
    }
}

function updateUnknownsTable(linear_algebra_visitor) {
    changeTableBody('unknowns_table', 'unknowns_table_tbody', replacement => {
        let row_idx = 0;
        linear_algebra_visitor.items.forEach((item, idx) => {
            let matrix = linear_algebra_visitor.augmented_matrix;
            console.log('row', item.id, matrix.getRow(idx));
            let status = matrix.getRow(idx).data[0].reduce((prev, cur) => {
                if (cur > 0) prev.positive++;
                if (cur < 0) prev.negative++;
                return prev;
                }, {negative: 0, positive: 0});
            console.log('status', status);
            if (status.negative > 0 && status.positive === 0) {
                // "input requirement", import or search process outputs
                let row = replacement.insertRow(-1);
                createUnknownImportButtons(setBgColour(row.insertCell(-1), row_idx), item);
                setBgColour(row.insertCell(-1), row_idx).innerText = item.id;
                row_idx++;
            }
            if (status.positive > 0 && status.negative === 0) {
                if (status.positive === 1 && graph_inputs.contains_requirement(item)) {
                    // "input requirement", import or search process outputs
                    let row = replacement.insertRow(-1);
                    createUnknownImportButtons(setBgColour(row.insertCell(-1), row_idx), item);
                    setBgColour(row.insertCell(-1), row_idx).innerText = item.id;
                    row_idx++;
                } else if (status.positive > 1 && graph_inputs.contains_requirement(item)) {
                    // nothing; the requirement is satisfied
                } else {
                    // "output requirement", export or search process inputs
                    let row = replacement.insertRow(-1);
                    createUnknownExportButtons(setBgColour(row.insertCell(-1), row_idx), item);
                    setBgColour(row.insertCell(-1), row_idx).innerText = item.id;
                    row_idx++;
                }
            }
        });
    });
}

function createUnknownImportButtons(cell, item) {
    let bi = document.createElement('button');
    bi.innerText = 'Import';
    bi.addEventListener('click', event => {
        graph_inputs.addImport(item);
        inputsChanged();
    });
    cell.appendChild(bi);
    let bs = document.createElement('button');
    bs.innerText = 'Search Process Outputs';
    bs.addEventListener('click', event => {
        handleProcessSearchByOutput({target: {value: '^' + item.id + '$'}})
    });
    cell.appendChild(bs);
}

function createUnknownExportButtons(cell, item) {
    let be = document.createElement('button');
    be.innerText = 'Export';
    be.addEventListener('click', event => {
        graph_inputs.addExport(item);
        inputsChanged();
    });
    cell.appendChild(be);
    let bs = document.createElement('button');
    bs.innerText = 'Search Process Inputs';
    bs.addEventListener('click', event => {
        handleProcessSearchByInput({target: {value: '^' + item.id + '$'}})
    });
    cell.appendChild(bs);
}

document.getElementById('data_set').addEventListener('change', handleDataSetChange);
document.getElementById('requirement_selection_id').addEventListener('keyup', handleRequirementSelectionId);
document.getElementById('process_selection_id').addEventListener('keyup', handleProcessSearchById);

document.getElementById('process_selection_output').addEventListener('keyup', handleProcessSearchByOutput);
document.getElementById('process_selection_input').addEventListener('keyup', handleProcessSearchByInput);

[...document.getElementsByClassName('hidable')].forEach(hidable => {
    hidable.addEventListener('click', evt => {
        let hideDiv = hidable.parentElement.getElementsByTagName('div')[0];
        hideDiv.classList.toggle('invisible')
    });
});
