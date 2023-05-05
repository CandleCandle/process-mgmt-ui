import { Stack } from 'process-mgmt/src/structures.js';


let data = null;


class GraphInputs {
    constructor() {
        this.requirements = []; // [Stack]
        this.imports = []; // [Item]
        this.exports = []; // [Item]
        this.processes = []; // [Process]
    }

    add_requirement(req) {
        if (this.contains_requirement(req.item)) {
            let i = this.requirements.findIndex(stack => stack.item.id === req.item.id);
            this.requirements[i] = req;
        } else {
            this.requirements.push(req);
        }
    }

    contains_requirement(item) {
        return this.requirements.some(stack => stack.item.id === item.id);
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
    'vt': "Voxel Tychoon",
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

function performRequirementSearch(str, cb) {
    let search = new RegExp('.*' + str + '.*', 'i');
    cb(Object.values(data.items).filter(
        item => item.id.match(search) || item.name.match(search)
    ));
}

function updateRequirementSearchResults(results) {
    let table_id = 'requirement_results';
    let tbody_id = 'requirement_results_tbody';
    let table = document.getElementById(table_id);
    let old_tbody = document.getElementById(tbody_id);
    let replacement = document.createElement('tbody');
    replacement.id = tbody_id;

    results.sort((a, b) => a.id.localeCompare(b.id))
        .forEach(item => {
            let row = replacement.insertRow(-1);
            let buttons = row.insertCell(-1);
            buttons.appendChild(createItemAddUpdateButton(item));
            buttons.appendChild(createItemImportButton(item));
            buttons.appendChild(createItemExportButton(item));
            row.insertCell(-1).textContent = item.id;
        });

    table.replaceChild(replacement, old_tbody);
}

function createItemAddUpdateButton(item) {
    let button = document.createElement('button');
    button.textContent = graph_inputs.contains_requirement(item) ? 'Update' : 'Add';
    button.addEventListener('click', e => {
        let q = document.getElementById('requirement_selection_quantity').value;
        if (!q || q.length === 0) q = 1;
        console.log('add/update item:', item.id, q);
        graph_inputs.add_requirement(new Stack(item, Number(q)));
        console.log(graph_inputs.requirements);
    });
    return button;
}
function createItemImportButton(item) {
    let button = document.createElement('button');
    button.textContent = 'Import';
    button.addEventListener('click', e => {
        console.log('import item:', item.id);
    });
    return button;
}
function createItemExportButton(item) {
    let button = document.createElement('button');
    button.textContent = 'Export';
    button.addEventListener('click', e => {
        console.log('export item:', item.id);
    });
    return button;
}


document.getElementById('data_set').addEventListener('change', handleDataSetChange);
document.getElementById('requirement_selection_id').addEventListener('keyup', handleRequirementSelectionId);
