
import { describe, it } from 'mocha';
import * as assert from 'assert';

import { add_items_to_data, add_processes_to_data, setup_data } from "./test_data.js";

import { Modifiers, modifier_styles, AdditionalPercentage, NormalPercentage, RawNumber } from '../src/modifiers.js';



describe('modifier tests', function() {
    describe('style: additional percentage', function() {
        let ap = new AdditionalPercentage();
        it('no speed change', function() {
            assert.strictEqual(1, ap.durationToRaw(0));
        });
        it('double speed', function() {
            assert.strictEqual(0.5, ap.durationToRaw(100));
        });
        it('half speed', function() {
            assert.strictEqual(2, ap.durationToRaw(-50));
        });
        it('no output change', function() {
            assert.strictEqual(1, ap.outputToRaw(0));
        });
        it('double output', function() {
            assert.strictEqual(2, ap.outputToRaw(100));
        });
        it('half output', function() {
            assert.strictEqual(0.5, ap.outputToRaw(-50));
        });
    });

    describe('style: normal percentage', function() {
        let np = new NormalPercentage();
        it('no change', function() {
            assert.strictEqual(1, np.durationToRaw(100));
        });
        it('double speed', function() {
            assert.strictEqual(0.5, np.durationToRaw(200));
        });
        it('half speed', function() {
            assert.strictEqual(2, np.durationToRaw(50));
        });
        it('no output change', function() {
            assert.strictEqual(1, np.outputToRaw(100));
        });
        it('double output', function() {
            assert.strictEqual(2, np.outputToRaw(200));
        });
        it('half output', function() {
            assert.strictEqual(0.5, np.outputToRaw(50));
        });
    });
});
