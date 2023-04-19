import Pair from './pair.js';
import FunctionType from '@alirya/function/boolean/function.js';
import util from "util";
import ObjectType from '@alirya/object/boolean/object.js';
import Name from '@alirya/object/string/name.js';
//
// export default function Object() : Pair {
//     return [
//         ObjectType,
//         value => ObjectTrimCircular(value)
//     ]
// }
//
//
// export function ObjectTrimCircular(object: object, reference: Set<object> = new Set<object>()) : object {
//
//     const copy = globalThis.Object.assign({}, object)
//
//     reference.add(object);
//
//     for (const [key, value] of globalThis.Object.entries(copy)) {
//
//         if(ObjectType(value)) {
//
//             if(reference.has(value)) {
//
//                 copy[key] = `<reference ${Name(value)}>`;
//
//             } else {
//
//                 reference.add(value);
//
//                 copy[key] = ObjectTrimCircular(value, reference);
//             }
//
//         }
//
//     }
//
//     return copy;
// }