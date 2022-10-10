import Pair from "./pair";
import {EventEmitter as EventEmitterOrigin} from "events";
import Name from '@alirya/object/string/name';


export default function EventEmitter() : Pair {

    return [
        value => value instanceof EventEmitterOrigin,
        value => `<EventEmitter ${Name(value)}>`
    ]
}