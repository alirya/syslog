import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export default interface Replacer {

    (value: any, formatted?:any[], parent?: Replacer) : ReplacerReturn;
}

export type ReplacerReturn = Value & Validatable;
