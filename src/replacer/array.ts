import Replacer, {ReplacerReturn} from './replacer.js';

export default function Array(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid : boolean = globalThis.Array.isArray(value);

    if(valid) {

        formatted.push(value);

        if(parent) {

            value = value.map(val => parent(val, globalThis.Array.from(formatted), parent).value);
        }
    }

    return {value, valid};

}