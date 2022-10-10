import Pair from "./pair";
import FunctionType from '@alirya/function/boolean/function';
import util from "util";

export default function Array() : Pair {

    return [
        globalThis.Array.isArray,
        value => value
    ]
}