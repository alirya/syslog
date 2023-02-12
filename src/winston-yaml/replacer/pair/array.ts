import Pair from './pair.js';
import FunctionType from '@alirya/function/boolean/function.js';
import util from "util";

export default function Array() : Pair {

    return [
        globalThis.Array.isArray,
        value => value
    ]
}