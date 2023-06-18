

class ModifierStyle {
    constructor(serial_key, name, def) {
        this.serial_key = serial_key;
        this.name = name;
        this.default = def;
    }

    createDurationModifierInput(process, modifiers) {
        return this.createModifierInput(this.getDurationModifierValue(process, modifiers));
    }
    createOutputModifierInput(process, modifiers) {
        return this.createModifierInput(this.getOutputModifierValue(process, modifiers));
    }

    getOutputModifierValue(process, modifiers) {
        if (modifiers[process.id]) {
            return this.outputFromRaw(modifiers[process.id].output);
        }
        return this.default;
    }

    getDurationModifierValue(process, modifiers) {
        if (modifiers[process.id]) {
            return this.durationFromRaw(modifiers[process.id].duration);
        }
        return this.default;
    }

    durationFromRaw(value) { return value; }
    durationToRaw(value) { return value; }
    outputFromRaw(value) { return value; }
    outputToRaw(value) { return value; }
}

class RawNumber extends ModifierStyle {
    // faster is a multiplier of 0.6
    // slower is a multiplier of 1.2
    constructor() {
        super('r', 'raw multiplier', 1);
    }
    createModifierInput(val) {
        let input = document.createElement('input');
        input.size = 5;
        input.value = val;
        let value = document.createElement('span');
        value.appendChild(input);
        return [input, value];
    }
}

class NormalPercentage extends ModifierStyle {
    // "100%" is standard, multiplier of 1.
    // slower is "75%", multiplier of 4/3 (duration gets larger)
    constructor() {
        super('p', 'percent multiplier', 100);
    }
    createModifierInput(val) {
        let input = document.createElement('input');
        input.size = 5;
        input.value = val;
        let value = document.createElement('span');
        value.appendChild(input);
        value.appendChild(document.createTextNode('%'));
        return [input, value];
    }

    durationFromRaw(value) { return 100/value; }
    durationToRaw(value) { return 100/value; }

    outputFromRaw(value) { return value * 100; }
    outputToRaw(value) { return value / 100; }
}

class AdditionalPercentage extends ModifierStyle {
    // "+0%" is standard, multiplier of 1.
    // faster is "+75%", multiplier of 1/1.75.
    constructor() {
        super('a', 'percent addition', 0);
    }
    createModifierInput(val) {
        let input = document.createElement('input');
        input.size = 5;
        input.value = val;
        let value = document.createElement('span');
        value.appendChild(document.createTextNode('+/- '));
        value.appendChild(input);
        value.appendChild(document.createTextNode('%'));
        return [input, value];
    }

    durationFromRaw(value) { return (100/value) - 100; }
    durationToRaw(value) { return 100/(value+100); }

    outputFromRaw(value) { return (value-1) * 100; }
    outputToRaw(value) { return (value+100) / 100; }
}

const modifier_styles = [new RawNumber(), new NormalPercentage(), new AdditionalPercentage()]
    .reduce((p, m) => {p[m.serial_key] = m; return p}, {});

class Modifiers {
    constructor(duration, output, duration_style, output_style) {
        this.duration = duration;
        this.duration_style = duration_style ? duration_style : modifier_styles['r'];
        this.output = output
        this.output_style = output_style ? output_style : modifier_styles['r'];
    }
}

export { Modifiers, modifier_styles, RawNumber, NormalPercentage, AdditionalPercentage }
