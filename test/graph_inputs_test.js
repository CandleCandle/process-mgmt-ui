
import { describe, it } from 'mocha';
import * as assert from 'assert';

import { add_items_to_data, add_processes_to_data, setup_data } from "./test_data.js";

import { GraphInputs } from '../src/graph_inputs.js';
import { Modifiers, modifier_styles } from '../src/modifiers.js';

let data = setup_data();
add_items_to_data(data, ['a', 'b', 'c', 'd', 'e', 'f', 'g']);
add_processes_to_data(data, {
    'C': {"in": ['a', 'b'], "out": ['c']},
    'D': {"in": ['c'], "out": ['d']},
    'E': {"in": ['c', 'd'], "out": ['e']},
    'F': {"in": ['e'], "out": ['f']},
});

describe('graph inputs', function() {
    describe('serialises', function() {
        it('v1', function() {
            let gi = new GraphInputs('sample_test');
            let result = gi.toSerial();
            assert.strictEqual(1, result.v);
        });
    });

    describe('deserialises', function() {
        it('v0, converting to v1', function() {
            let input = {
                'game_id': 'sample_test',
                'requirements': [ { 'id': 'e', 'q': 6 } ],
                'imports': [ 'a' ],
                'exports': [ 'c' ],
                'processes': [ 'C', 'D' ],
                'default_factory_groups': {},
                'process_modifiers': {
                    'C': {'d': 0.8, 'o': 0.9 }
                }
              };
            let result = GraphInputs.fromSerial(input, data);
            assert.deepStrictEqual(result.process_modifiers['C'],
                new Modifiers(0.8, 0.9, modifier_styles['r'], modifier_styles['r']));
        });
        it('v1', function() {
            let input = {
                'v': 1,
                'game_id': 'sample_test',
                'requirements': [ { 'id': 'e', 'q': 6 } ],
                'imports': [ 'a' ],
                'exports': [ 'c' ],
                'processes': [ 'C', 'D' ],
                'default_factory_groups': {},
                'process_modifiers': {
                    'C': {'d': 0.7, 'o': 1.4, 'ds': 'p', 'os': 'a' }
                }
              };
            let result = GraphInputs.fromSerial(input, data);
            assert.deepStrictEqual(result.process_modifiers['C'],
                new Modifiers(0.7, 1.4, modifier_styles['p'], modifier_styles['a']));
        });
    });
});
