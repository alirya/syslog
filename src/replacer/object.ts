import Replacer, {ReplacerReturn} from './replacer.js';
import ObjectType from '@axiona/object/boolean/object.js';

export default function Object(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = ObjectType(value);

    if(ObjectType(value)) {

        formatted.push(value);

        value = globalThis.Object.assign({}, value);

        if(parent) {

            value = globalThis.Object.assign({}, ...globalThis.Object.entries(value).map(([key, value]) => {
                return {[key] : parent(value, Array.from(formatted), parent).value}
            }))
        }
    }

    return {valid, value};

}
