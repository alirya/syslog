import Replacer, {ReplacerReturn} from './replacer.js';
import ObjectType from '@alirya/object/boolean/object.js';
import Name from '@alirya/object/string/name.js';


// export default class CircularReference implements Replacer {
//
//     constructor() {}
//     //
//     // formatable(value: object, formatted:any[]) : value is object {
//     //
//     //     return ObjectType(value) && formatted.includes(value);
//     // }
//
//     replace(value: object, formatted:any[], parent?: Replacer) : any {
//
//         if(ObjectType(value) && formatted.includes(value)) {
//
//             formatted.push(value);
//
//             return `<reference ${Name(value)}>`;
//         }
//
//         return value;
//     }
// }


export default function CircularReference(value: any, formatted:any[]= [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = ObjectType(value) && formatted.includes(value);

    if(valid) {

        // formatted.push(value);

        value = `<reference ${Name(value)}>`;
    }

    return {valid, value};
}