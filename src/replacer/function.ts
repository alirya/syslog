import Replacer, {ReplacerReturn} from './replacer';
import FunctionType from '@alirya/function/boolean/function.js';
import util from "util";

export default function Date(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = FunctionType(value);

    if(valid) {

        value = '<' + util.inspect(value).slice(0,2).slice(0, -1) + '>';
    }

    return {valid, value};
}
