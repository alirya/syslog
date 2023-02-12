import Callable from '@alirya/function/callable.js';
import Pair from './pair/pair.js';
import Value from "@alirya/value/value.js";
import Validatable from "@alirya/validatable/validatable.js";
import Valid from "@alirya/validatable/validatable.js";

// type Replacer = Pair[];
export default interface Replacer/*<Type extends any>*/ {

    // formatable(value: any, formatted:any[]) : value is Type;
    (value: any, formatted?:any[], parent?: Replacer) : ReplacerReturn;
}

export type ReplacerReturn = Value & Validatable;