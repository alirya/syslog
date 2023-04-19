import Replacer from './replacer.js';
import Buffer from './buffer.js';
import EventEmitter from './event-emitter.js';
import Function from './function.js';
import Date from './date.js';
import Array from './array.js';
import Object from './object.js';
import CircularReference from './circular-reference.js';
import Compound from './compound.js';
import Symbol from "./symbol.js";

export default function Default(
    previous : Replacer[] = [],
    next: Replacer[] = []
) : Replacer {

    return Compound([
        ...previous,
        CircularReference,
        Symbol,
        Buffer,
        EventEmitter,
        Function,
        Date(),
        Array,
        Object,
        ...next,
    ])
}