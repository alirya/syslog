import Replacer, {ReplacerReturn} from './replacer.js';
import {EventEmitter as EventEmitterOrigin} from "events";
import Name from '@axiona/object/string/name.js';


export default function EventEmitter(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = value instanceof EventEmitterOrigin;

    if(value instanceof EventEmitterOrigin) {

        value = `<EventEmitter ${Name(value)}>`;

    }

    return {value, valid};

}
