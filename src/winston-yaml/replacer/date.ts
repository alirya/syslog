import Replacer, {ReplacerReturn} from "./replacer";
import Callable from '@alirya/function/callable';


// export default class Date implements Replacer {
//
//     constructor(
//         private formatter:Callable<[globalThis.Date], string> = date => date.toString()
//     ) {}
//
//     // formatable(value: any) : value is globalThis.Date {
//     //
//     //     return value instanceof globalThis.Date;
//     // }
//
//     replace(value: globalThis.Date, formatted:any[], parent?: Replacer) : any {
//
//         if(value instanceof globalThis.Date) {
//
//             formatted.push(value);
//             return this.formatter(value);
//         }
//
//         return value;
//
//     }
// }

export default function Date(formatter:Callable<[globalThis.Date], string> = date => date.toString()) : Replacer {

    return function (value: any, formatted:any[]= [], parent?: Replacer) : ReplacerReturn {

        const valid: boolean = value instanceof globalThis.Date;

        if(valid) {

            // formatted.push(value);
            value = formatter(value);
        }

        return {valid, value};

    }
}
