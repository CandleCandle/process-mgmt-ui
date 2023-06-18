import { Factory, FactoryGroup, Stack, Process, Item, Data } from 'process-mgmt/src/structures.js';

const setup_data = function() {
    let data = new Data('sample_test', '0.0.1');

    data.add_factory_group(new FactoryGroup('basic_group'));
    data.add_factory(new Factory("basic", "basic", data.factory_groups.basic_group, 1));
    return data;
}

const add_items_to_data = function(data, items) {
    items.forEach(e => data.add_item(new Item(e, e)));
}

/**
 * processes: object with entries like 'C': {"in": ['a', 'b'], "out": ['c']}
 */
const add_processes_to_data = function(data, processes) {
    Object.entries(processes).forEach(e => {
            data.add_process(new Process(
                e[0], // id
                e[1]["in"].map(i => item_to_stack(data, i)),
                e[1]["out"].map(i => item_to_stack(data, i)),
                1,
                data.factory_groups.basic_group
            ))
    });
};

const item_to_stack = function(data, item) {
    if ((typeof item) == 'object') {
        return new Stack(data.items[item["item"]], item["quantity"]);
    } else {
        return new Stack(data.items[item], 1);
    }
}

export { setup_data, add_items_to_data, add_processes_to_data };
