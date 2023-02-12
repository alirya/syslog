import Replacer, {ReplacerReturn} from './replacer.js';
import {EventEmitter as EventEmitterOrigin} from "events";
import Name from '@alirya/object/string/name.js';

// export default class EventEmitter implements Replacer {
//
//     constructor() {}
//
//     formatable(value: any) : value is EventEmitterOrigin {
//
//         return value instanceof EventEmitterOrigin;
//     }
//
//     replace(value: any, formatted:any[], parent?: Replacer) : any {
//
//         if(value instanceof EventEmitterOrigin) {
//
//             formatted.push(value);
//             //
//             // if(parent) {
//             //
//             //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
//             // }
//
//             return `<EventEmitter ${Name(value)}>`;
//
//         }
//
//         return value;
//
//     }
// }

export default function EventEmitter(value: any, formatted:any[]= [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = value instanceof EventEmitterOrigin;

    if(value instanceof EventEmitterOrigin) {

        // formatted.push(value);
        //
        // if(parent) {
        //
        //     return value.map(val => parent.format(val, globalThis.Array.from(formatted), parent))
        // }

        value = `<EventEmitter ${Name(value)}>`;

    }

    return {value, valid};

}
