import Replacer from "./replacer";
import Buffer from "./pair/buffer";
import EventEmitter from "./pair/event-emitter";
import Function from "./pair/function";
import Date from "./pair/date";
import Array from "./pair/array";
import Object from "./pair/object";

export default function Default(
    previous : Replacer = [],
    next: Replacer = []
) : Replacer {

    return [
        ...previous,
        Buffer(),
        EventEmitter(),
        Function(),
        Date(),
        Array(),
        Object(),
        ...next,
    ]
}