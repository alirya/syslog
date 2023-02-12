import Replacer, {ReplacerReturn} from './replacer.js';

//
// export default class Array implements Replacer<globalThis.Array<any>> {
//
//     constructor() {}
//
//     // formatable(value: any) : value is globalThis.Array<any> {
//     //
//     //     return globalThis.Array.isArray(value);
//     // }
//
//     replace(value: any, formatted:any[], parent?: Replacer) : any {
//
//         if(globalThis.Array.isArray(value)) {
//
//             formatted.push(value);
//
//             if(parent) {
//
//                 return value.map(val => parent.replace(val, globalThis.Array.from(formatted), parent))
//             }
//         }
//
//         return value;
//
//     }
// }


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