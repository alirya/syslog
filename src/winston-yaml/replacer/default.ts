import Replacer from "./replacer";
import Buffer from "./buffer";
import EventEmitter from "./event-emitter";
import Function from "./function";
import Date from "./date";
import Array from "./array";
import Object from "./object";
import CircularReference from "./circular-reference";
import Compound from "./compound";

export default function Default(
    previous : Replacer[] = [],
    next: Replacer[] = []
) : Replacer {

    return Compound([
        ...previous,
        CircularReference,
        Buffer,
        EventEmitter,
        Function,
        Date(),
        Array,
        Object,
        ...next,
    ])
}