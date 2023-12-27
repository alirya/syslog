import Replacer, {ReplacerReturn} from './replacer.js';
import ObjectType from '@axiona/object/boolean/object.js';
import Name from '@axiona/object/string/name.js';


export default function CircularReference(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = ObjectType(value) && formatted.includes(value);

    if(valid) {

        value = `<reference ${Name(value)}>`;
    }

    return {valid, value};
}
