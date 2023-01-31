import Callable from '@alirya/function/callable';
import Pair from "./pair/pair";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Valid from "@alirya/validatable/validatable";

// type Replacer = Pair[];
export default interface Replacer/*<Type extends any>*/ {

    // formatable(value: any, formatted:any[]) : value is Type;
    (value: any, formatted?:any[], parent?: Replacer) : ReplacerReturn;
}

export type ReplacerReturn = Value & Validatable;