import Pair from "./pair";
import FunctionType from '@alirya/function/boolean/function';
import util from "util";

export default function Function() : Pair {

    return [
        FunctionType,
        value => '<' + util.inspect(value).slice(0,2).slice(0, -1) + '>'
    ]
}