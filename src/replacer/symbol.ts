import Replacer, {ReplacerReturn} from './replacer.js';
import {IsSymbol} from '@axiona/object/symbol/boolean/symbol.js';


export default function  Symbol(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = IsSymbol(value);

    if(valid) {

        value = `<Buffer ${value.toString()}>`;
    }

    return {value, valid};
}
