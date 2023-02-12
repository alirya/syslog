import Replacer, {ReplacerReturn} from './replacer.js';


// export default class Buffer implements Replacer<globalThis.Buffer> {
//
//     constructor() {}
//
//     formatable(value: any) : value is globalThis.Buffer {
//
//         return globalThis.Buffer.isBuffer(value);
//     }
//
//     replace(value: globalThis.Buffer, formatted:any[], parent?: Replacer<any>) : any {
//
//         if(globalThis.Buffer.isBuffer(value)) {
//
//             formatted.push(value);
//
//             return `<Buffer length:${value.length}>`;
//         }
//         //
//         // if(parent) {
//         //
//         //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
//         // }
//
//
//         return value;
//     }
// }

export default function  Buffer(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = globalThis.Buffer.isBuffer(value);

    if(valid) {

        // formatted.push(value);

        value = `<Buffer length:${value.length}>`;

    }
    //
    // if(parent) {
    //
    //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
    // }


    return {value, valid};
}
