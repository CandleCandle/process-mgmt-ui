import { Factory, FactoryGroup, Stack, Process, Item, Data } from 'process-mgmt/src/structures.js';
import { Modifiers, modifier_styles } from './modifiers.js';

function reduceEntriesToObject(prev, [k,v]) {
    prev[k] = v;
    return prev;
}


function factoriesForFactoryGroup(data, factory_group_id) {
    return Object.values(data.factories)
        .filter(factory => factory.groups.some(fg => fg.id === factory_group_id))
        .sort((fa, fb) => fa.duration_modifier > fb.duration_modifier);
}

class GraphInputs {
    constructor(game_id) {
        this.game_id = game_id;
        this.requirements = []; // [Stack]
        this.imports = []; // [Item]
        this.exports = []; // [Item]
        this.processes = []; // [Process]
        this.default_factory_groups = {}; // factory_group.id => factory type
        this.process_modifiers = {}; // process.id => Modifiers
    }

    static fromSerial(serial, data) {
        switch(serial.v) {
            case 1: return GraphInputs.fromSerialV1(serial, data);
            default: return GraphInputs.fromSerialV0(serial, data);
        }
    }
    static fromSerialV1(serial, data) {
        let gi = new GraphInputs(serial.game_id);
        gi.requirements = serial.requirements.map(req => new Stack(data.items[req.id], req.q));
        gi.imports = serial.imports.map(i => data.items[i]);
        gi.exports = serial.exports.map(e => data.items[e]);
        gi.processes = serial.processes.map(p => data.processes[p]);
        gi.default_factory_groups = Object.entries(serial.default_factory_groups)
            .map(([k, v]) => [k, data.factories[v]])
            .reduce(reduceEntriesToObject, {});
        gi.process_modifiers = Object.entries(serial.process_modifiers)
            .map(([k, v]) => [k, new Modifiers(v.d, v.o, modifier_styles[v.ds], modifier_styles[v.os])])
            .reduce(reduceEntriesToObject, {});
        return gi;
    }

    static fromSerialV0(serial, data) {
        let gi = new GraphInputs(serial.game_id);
        gi.requirements = serial.requirements.map(req => new Stack(data.items[req.id], req.q));
        gi.imports = serial.imports.map(i => data.items[i]);
        gi.exports = serial.exports.map(e => data.items[e]);
        gi.processes = serial.processes.map(p => data.processes[p]);
        gi.default_factory_groups = Object.entries(serial.default_factory_groups)
            .map(([k, v]) => [k, data.factories[v]])
            .reduce(reduceEntriesToObject, {});
        gi.process_modifiers = Object.entries(serial.process_modifiers)
            .map(([k, v]) => [k, new Modifiers(v.d, v.o)])
            .reduce(reduceEntriesToObject, {});
        return gi;
    }

    toSerial() {
        return {
            v: 1,
            game_id: this.game_id,
            requirements: this.requirements.map(req => {return {id: req.item.id, q: req.quantity}}),
            imports: this.imports.map(item => item.id),
            exports: this.exports.map(item => item.id),
            processes: this.processes.map(proc => proc.id),
            default_factory_groups: Object.entries(this.default_factory_groups)
                .map(([k, v]) => [k, v.id])
                .reduce(reduceEntriesToObject, {}),
            process_modifiers: Object.entries(this.process_modifiers)
                .map(([k, v]) => [k, {d: v.duration, o: v.output, ds: v.duration_style.serial_key, os: v.output_style.serial_key}])
                .reduce(reduceEntriesToObject, {})
        };
    }

    getFactoryForProcess(data, process) {

        if (this.default_factory_groups[process.factory_group.id]) {
            return this.default_factory_groups[process.factory_group.id];
        }
        let all_suitable_factories = factoriesForFactoryGroup(data, process.factory_group.id);
        if (all_suitable_factories.length > 0) {
            return all_suitable_factories[0];
        }
        return new Factory('__default__', '__default__', null, 1, 1);
    }

    getModifiedFactoryForProcess(data, process) {
        let d = this.process_modifiers[process.id] && this.process_modifiers[process.id].duration
            ? this.process_modifiers[process.id].duration
            : 1;
        let o = this.process_modifiers[process.id] && this.process_modifiers[process.id].output
            ? this.process_modifiers[process.id].output
            : 1;
        return this.getFactoryForProcess(data, process).modify(d, o);
    }

    add_requirement(req) {
        if (this.contains_requirement(req.item)) {
            let i = this.requirements.findIndex(stack => stack.item.id === req.item.id);
            this.requirements[i] = req;
        } else {
            this.requirements.push(req);
        }
    }
    addModifier(process, modifier) {
        console.log('added modifier:', process.id, modifier);
        this.process_modifiers[process.id] = modifier;
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
            this.processes.splice(i, 1);
        }
    }
}

export { GraphInputs }
