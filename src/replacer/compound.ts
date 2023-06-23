import Replacer from './replacer.js';

export default function Compound(replacers: Replacer[]) : Replacer {

    let replace : Replacer;

    replace = function (value: any, formatted: any[]= [], parent?: Replacer) {

        let valid  = false;

        for (const replacer of replacers) {

            const result = replacer(value, Array.from(formatted), parent || replace);

            valid = result.valid;
            value = result.value;

            if(valid) {

                break;
            }
        }

        return {value, valid};
    }

    return replace;
}