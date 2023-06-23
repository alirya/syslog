import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

export default interface Replacer {

    (value: any, formatted?:any[], parent?: Replacer) : ReplacerReturn;
}

export type ReplacerReturn = Value & Validatable;