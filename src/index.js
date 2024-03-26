import { Factory, Stack, ProcessChain } from 'process-mgmt/src/structures.js';
import { RateVisitor } from 'process-mgmt/src/visit/rate_visitor.js';
import { LinearAlgebra } from 'process-mgmt/src/visit/linear_algebra_visitor.js';
import { RateGraphRenderer } from 'process-mgmt/src/visit/rate_graph_renderer.js';
import { ProcessCountVisitor } from 'process-mgmt/src/visit/process_count_visitor.js';

import { GraphInputs } from './graph_inputs.js';
import { Modifiers, modifier_styles } from './modifiers.js';

const ROW_A = 'row_a';
const ROW_B = 'row_b';

// Global state
let data = null;
let graph_inputs = null;


function handleDataSetChange(event) {
    console.log('attempting to load data: ', event.target.value);
    loadDataSet(event.target.value)
        .then(d => [d, new GraphInputs(d.game)])
        .then(postDataChange)
        .then(inputsChanged);
}

function postDataChange([new_data, new_graph_inputs]) {
    data = new_data;
    graph_inputs = new_graph_inputs;
    document.getElementById('data_selection_display').textContent = data.game + ' at version ' + data.version;
}

function loadDataSet(str) {
    return import(/* webpackChunkName: 'game_data' */`process-mgmt/src/${str}/data.js`)
        .then(module => module.default);
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
    window.location.hash = '#' + btoa(JSON.stringify(graph_inputs.toSerial()));
    updateRequirementsTable(graph_inputs);
    updateIncludedProcessesTable(graph_inputs);
    updateMatrix(graph_inputs);
}

function updateIncludedProcessesTable(graph_inputs) {
    changeProcessTableBody(graph_inputs.processes, 'processes_included', 'processes_included_tbody',  (cell, process, dur_selector, dur_input, out_selector, out_input) => {
        let b = document.createElement('button');
        b.innerText = 'Remove';
        b.addEventListener('click', event => {
            graph_inputs.remove_process(process);
            inputsChanged();
        });
        cell.appendChild(b);
        createProcessUseButton(cell, process, dur_selector, dur_input, out_selector, out_input);
        // let u = document.createElement('button');
        // u.innerText = 'Use';
        // u.addEventListener('click', event => {
        //     // UPDATE process;
        //     inputsChanged();
        // });
        // cell.appendChild(u);

    }, graph_inputs.process_modifiers);
}

function updateRequirementsTable(graph_inputs) {
    changeTableBody('input_table', 'input_table_tbody', replacement => {
        let idx = 0;
        graph_inputs.requirements.forEach(stack => {
            let row = replacement.insertRow(-1);
            let buttons = setBgColour(row.insertCell(-1), idx);
            buttons.appendChild(createItemRemovalButton(stack));
            let quantity_cell = setBgColour(row.insertCell(-1), idx);
            let quantity_input = document.createElement('input');
            quantity_input.value = stack.quantity;
            let update_quantity_action = (e) => {
                graph_inputs.add_requirement(new Stack(stack.item, Number(quantity_input.value)));
                inputsChanged();
            };
            quantity_input.addEventListener('keyup', e => onEnter(e, update_quantity_action));
            let update_button = document.createElement('button');
            update_button.innerText = 'Update';
            update_button.addEventListener('click', update_quantity_action);
            quantity_cell.appendChild(quantity_input);
            quantity_cell.appendChild(update_button);
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
}

function factoriesForFactoryGroup(factory_group_id) {
    return Object.values(data.factories)
        .filter(factory => factory.groups.some(fg => fg.id === factory_group_id))
        .sort((fa, fb) => fa.duration_modifier - fb.duration_modifier);
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

function updateDefaultFactoriesTable(graph_inputs, process_counts) {
    changeTableBody('default_factories', 'default_factories_tbody', replacement => {
        Object.entries(graph_inputs.processes
            .reduce((prev, process) => {
                if (!prev[process.factory_group.id]) {
                    prev[process.factory_group.id] = {count: 0};
                }
                prev[process.factory_group.id].count += process_counts[process.id];
                return prev;  // {factory_group_id: {count: ...}, ...}
            }, {})) // [ [factory_group_id, {count: ..., }], ]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([factory_group_id, value], idx) => {
                console.log(factory_group_id, value);
                let row = replacement.insertRow(-1);
                setBgColour(row.insertCell(-1), idx).innerText = factory_group_id;
                setBgColour(row.insertCell(-1), idx).appendChild(
                    createFactorySelectForFactoryGroup(
                        factory_group_id,
                        graph_inputs.default_factory_groups[factory_group_id])
                )
                setBgColour(row.insertCell(-1), idx).innerText = (value.count === null ? 'n/a' : Math.round((value.count + Number.EPSILON) * 1e5)/1e5);
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
    changeProcessTableBody(results, "process_search_results", "process_search_results_tbody", createProcessUseButton, {});
}

function changeProcessTableBody(processes, table_id, tbody_id, button_cb, modifiers/*, modifiers_mode */) {
    changeTableBody(table_id, tbody_id, replacement =>{
        processes.forEach((process, idx) => {
            let max_rowspan = Math.max(process.inputs.length, process.outputs.length);
            for (let row_idx = 0; row_idx < max_rowspan; ++row_idx) {
                let row = replacement.insertRow(-1);
                let duration_modifier_inputs = createDurationModifierInput(process, modifiers)
                let duration_modifier_style_selection = createModifierStyleSelection(process, modifiers, 'duration_style')
                let output_modifier_inputs = createOutputModifierInput(process, modifiers)
                let output_modifier_style_selection = createModifierStyleSelection(process, modifiers, 'output_style')
                if (row_idx === 0) {
                    let cells = new Array(7).fill(null).map(() => row.insertCell(-1));
                    // addModifierEventListeners(duration_modifier_style_selection, duration_modifier_inputs[0]);
                    button_cb(cells[0], process,
                        duration_modifier_style_selection, duration_modifier_inputs[0],
                        output_modifier_style_selection, output_modifier_inputs[0]
                    );
                    cells[1].innerText = process.id;
                    cells[2].innerText = process.factory_group.id;
                    cells[3].innerText = process.duration;
                    cells[4].appendChild(duration_modifier_style_selection);
                    cells[5].appendChild(duration_modifier_inputs[1]);
                    cells[6].innerText = modifyDuration(process, modifiers);
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
                if (row_idx === 0) {
                    let cells = new Array(2).fill(null).map(() => row.insertCell(-1));
                    cells[0].appendChild(output_modifier_style_selection);
                    cells[1].appendChild(output_modifier_inputs[1]);
                    cells.forEach(c => setBgColour(c, idx).rowSpan = max_rowspan);
                }
                if (process.outputs.length > row_idx) {
                    setBgColour(row.insertCell(-1), idx).innerText = modifyOutput(process, modifiers, row_idx);
                } else {
                    setBgColour(row.insertCell(-1), idx).innerText = '';
                }
            }
        });
    });
}

function createDurationModifierInput(process, modifiers) {
    if (modifiers[process.id] && modifiers[process.id].duration_style) {
        return modifiers[process.id].duration_style.createDurationModifierInput(process, modifiers);
    } else if (data_sets[graph_inputs.game_id] && data_sets[graph_inputs.game_id].duration_style) {
        return data_sets[graph_inputs.game_id].duration_style.createDurationModifierInput(process, modifiers);
    }
    let input = document.createElement('span');
    input.innerText = 'disabled'
    let value = document.createElement('span');
    value.appendChild(input);
    return [input, value];
}

function createOutputModifierInput(process, modifiers) {
    if (modifiers[process.id] && modifiers[process.id].output_style) {
        return modifiers[process.id].output_style.createOutputModifierInput(process, modifiers);
    } else if (data_sets[graph_inputs.game_id] && data_sets[graph_inputs.game_id].output_style) {
        return data_sets[graph_inputs.game_id].output_style.createOutputModifierInput(process, modifiers);
    }
    let input = document.createElement('span');
    input.innerText = 'disabled'
    let value = document.createElement('span');
    value.appendChild(input);
    return [input, value];
}

function createModifierStyleSelection(process, modifiers, style_group) {
    let select = document.createElement('select');
    let selected = -1;
    Object.values(modifier_styles).forEach((style, idx) => {
        let e = document.createElement('option');
        e.value = style.serial_key;
        e.text = style.name;
        if (modifiers[process.id]) {
            if (style.serial_key === modifiers[process.id][style_group].serial_key) {
                selected = idx;
                select.selectedIndex = idx;
            }
        } else if (data_sets[graph_inputs.game_id]
            && style.serial_key === data_sets[graph_inputs.game_id][style_group].serial_key) {
            selected = idx;
            select.selectedIndex = idx;
        }
        select.appendChild(e);
    });
    select.selectedIndex = selected;
    return select;
}

function addModifierEventListeners(selector, input) {
    // selector.onChange ... update inputs
    // input.onChange/onfocusout


}

function modifyDuration(process, modifiers) {
    if (modifiers[process.id] && modifiers[process.id].duration) {
        return modifiers[process.id].duration * process.duration;
    }
    return process.duration;
}

function modifyOutput(process, modifiers, index) {
    if (modifiers[process.id] && modifiers[process.id].output) {
        return modifiers[process.id].output * process.outputs[index].quantity;
    }
    return process.outputs[index].quantity;
}

function createProcessUseButton(cell, process, dur_selector, dur_input, out_selector, out_input) {
    let button = document.createElement('button');
    button.innerText = 'Use';
    button.addEventListener('click', event => {
        graph_inputs.add_process(process);
        let mod_style_d = modifier_styles[dur_selector.value];
        let mod_style_o = modifier_styles[out_selector.value];
        let dmv = Number(dur_input.value);
        let omv = Number(out_input.value);
        if ((mod_style_d && dmv !== mod_style_d.default)
             || (mod_style_o && omv !== mod_style_o.default)) {
            graph_inputs.addModifier(process, new Modifiers(
                mod_style_d.durationToRaw(dmv),
                mod_style_o.outputToRaw(omv),
                mod_style_d, mod_style_o));
        }
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
        document.getElementById('image_container').innerHTML = null;
        return;
    };
    let linear_algebra_visitor = new LinearAlgebra(inputs.requirements, inputs.imports.map(i => i.id), inputs.exports.map(i => i.id));
    linear_algebra_visitor.print_matricies = true;
    let chain = new ProcessChain(inputs.processes)
        .accept(new RateVisitor(proc => graph_inputs.getModifiedFactoryForProcess(data, proc)))
        .accept(new ProcessCountVisitor())
        .accept(linear_algebra_visitor);
    updateMatrixTable(linear_algebra_visitor, 'augmented_matrix_table', linear_algebra_visitor.augmented_matrix);
    updateMatrixTable(linear_algebra_visitor, 'reduced_matrix_table', linear_algebra_visitor.reduced_matrix);
    updateUnknownsTable(linear_algebra_visitor);
    updateDefaultFactoriesTable(inputs, chain.process_counts);


    let graph_data = chain.accept(new RateGraphRenderer()).join('\n');
    console.log(graph_data);

    document.getElementById('image_container').innerHTML = Viz(
        graph_data,
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
            let status = matrix.getRow(idx).data[0].reduce((prev, cur) => {
                if (cur > 0) prev.positive++;
                if (cur < 0) prev.negative++;
                return prev;
                }, {negative: 0, positive: 0});
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


class DataSet {
    constructor(id, name, duration_modifier_style, output_modifier_style) {
        this.id = id;
        this.name = name;
        this.duration_style = duration_modifier_style;
        this.output_style = output_modifier_style;
    }
}

let data_sets = [
    new DataSet('for-the-crown-3.8.3', 'For The Crown (3.8.3)', modifier_styles['r'], modifier_styles['r']),
    new DataSet('dsp', 'DSP', modifier_styles['r'], modifier_styles['r']),
    new DataSet('factorio-ab-1.1.38', 'Factorio AB (1.1.38)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('factorio-py-1.1.53', 'Factorio PY (1.1.53)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('factorio-ff-1.1.76', 'Factorio FF (1.1.76)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('factorio-ff-1.1.94', 'Factorio FF (1.1.94)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('factorio-1.1.94-k2se', 'Factorio K2+SE (1.1.94)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('factorio-1.1.104-very-bz-0.5.1', 'Factorio Very BZ (0.5.1)', modifier_styles['a'], modifier_styles['a']),
    new DataSet('plan-b-terraform', 'Plan B, Terraform', modifier_styles['r'], modifier_styles['r']),
    new DataSet('satisfactory', "Satisfactory", modifier_styles['p'], modifier_styles['p']),
    new DataSet('vt', "Voxel Tycoon", modifier_styles['r'], modifier_styles['r']),
].reduce((p, d) => {p[d.id] = d; return p;}, {});
console.log(data_sets);


let sets = document.getElementById('data_set');
Object.values(data_sets).forEach(element => {
    let e = document.createElement('option');
    e.value = element.id;
    e.innerText = element.name;
    sets.appendChild(e);
});

graph_inputs = new GraphInputs(null);

document.getElementById('data_set').addEventListener('change', handleDataSetChange);
document.getElementById('requirement_selection_id').addEventListener('keyup', handleRequirementSelectionId);
document.getElementById('requirement_selection_quantity').addEventListener('keyup', e => onEnter(e, evt => {
    performRequirementSearch(document.getElementById('requirement_selection_id').value, updateRequirementSearchResults);
}));
document.getElementById('do_item_search').addEventListener('click', evt => {
    performRequirementSearch(document.getElementById('requirement_selection_id').value, updateRequirementSearchResults);
});
document.getElementById('process_selection_id').addEventListener('keyup', handleProcessSearchById);

document.getElementById('process_selection_output').addEventListener('keyup', handleProcessSearchByOutput);
document.getElementById('process_selection_input').addEventListener('keyup', handleProcessSearchByInput);

[...document.getElementsByClassName('hidable')].forEach(hidable => {
    hidable.addEventListener('click', evt => {
        let hideDiv = hidable.parentElement.getElementsByTagName('div')[0];
        hideDiv.classList.toggle('invisible')
    });
});

if (window.location.hash) {
    console.log('hash detected', window.location.hash);
    let blob = JSON.parse(atob(window.location.hash.slice(1)));
    console.log('decoded hash', blob);
    loadDataSet(blob.game_id)
        .then(d => [d, GraphInputs.fromSerial(blob, d)])
        .then(postDataChange)
        .then(inputsChanged);
}
