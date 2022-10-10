import Pair from "./pair";
import FunctionType from '@alirya/function/boolean/function';
import util from "util";
import ObjectType from '@alirya/object/boolean/object';

export default function Object() : Pair {
    return [
        ObjectType,
        value => globalThis.Object.assign({}, value)
    ]
}