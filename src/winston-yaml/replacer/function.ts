import Replacer, {ReplacerReturn} from './replacer.js';
import Callable from '@alirya/function/callable.js';
import FunctionType from '@alirya/function/boolean/function.js';
import util from "util";


// export default class Date implements Replacer {
//
//     constructor() {}
//
//     // formatable(value: Callable) : value is Callable {
//     //
//     //     return FunctionType(value);
//     // }
//
//     format(value: any, formatted:any[], parent?: Replacer) : any {
//
//         if(FunctionType(value)) {
//
//             formatted.push(value);
//             return '<' + util.inspect(value).slice(0,2).slice(0, -1) + '>';
//         }
//
//         return value;
//     }
// }

export default function Date(value: any, formatted:any[]= [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = FunctionType(value);

    if(valid) {

        // formatted.push(value);
        value = '<' + util.inspect(value).slice(0,2).slice(0, -1) + '>';
    }

    return {valid, value};
}
