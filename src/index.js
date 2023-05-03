

let data = null;


function handleDataSetChange(event) {

    console.log('attempting to load data: ', event.target.value);
    import(/* webpackChunkName: 'game_data' */ `process-mgmt/src/${event.target.value}/data.js`)
        .then(module => updateDataSet(module.default));
}

function updateDataSet(replacement_data) {
    data = replacement_data;
    document.getElementById('data_selection_display').textContent = data.game + ' at version ' + data.version;
}

let data_sets = {
    'dsp': 'DSP',
//    'factorio-ab': 'Factorio AB, manual',
//    'factorio-ab-01': 'Factorio AB, manual',
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

document.getElementById('data_set').addEventListener('change', handleDataSetChange);
