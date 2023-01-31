import Replacer, {ReplacerReturn} from "./replacer";
import ObjectType from '@alirya/object/boolean/object';

//
// export default class Object implements Replacer {
//
//     constructor() {}
//
//     // formatable(value: any) : value is object {
//     //
//     //     return ObjectType(value);
//     // }
//
//     replace(value: any, formatted:any[], parent?: Replacer) : any {
//
//         if(ObjectType(value)) {
//
//             formatted.push(value);
//
//             value = globalThis.Object.assign({}, value);
//
//             if(parent) {
//
//                 return globalThis.Object.assign({}, ...globalThis.Object.entries(value).map(([key, value]) => {
//                     return {[key] : parent.replace(value, Array.from(formatted), parent)}
//                 }))
//             }
//         }
//
//         return value;
//
//         // for (const [key, va] of globalThis.Object.entries(value)) {
//         //
//         //
//         // }
//         //
//         // if(parent) {
//         //
//         //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
//         // }
//         //
//         // return value;
//
//     }
// }

export default function Object(value: any, formatted:any[]= [], parent?: Replacer) : ReplacerReturn {

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

    // for (const [key, va] of globalThis.Object.entries(value)) {
    //
    //
    // }
    //
    // if(parent) {
    //
    //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
    // }
    //
    // return value;

}
