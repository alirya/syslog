import Replacer from './replacer.js';

//
// export default class Compound implements Replacer<object> {
//
//     constructor(private replacers: Replacer[]) {
//     }
//
//
//     // formatable(value: any, formatted: any[]): boolean {
//     //
//     //     for (const replacer of this.replacers) {
//     //
//     //         replacer.formatable(value, formatted);
//     //     }
//     //
//     //     return false;
//     // }
//
//     replace(value: object, formatted: any[], parent?: Replacer) {
//
//         for (const replacer of this.replacers) {
//
//             value = replacer.replace(value, Array.from(formatted));
//         }
//
//         return value;
//
//         // throw new Error("Method not implemented.");
//     }
//
// }

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

        // throw new Error("Method not implemented.");
    }

    return replace;
}