import Replacer, {ReplacerReturn} from './replacer.js';
import Callable from '@axiona/function/callable.js';

export default function Date(formatter:Callable<[globalThis.Date], string> = date => date.toString()) : Replacer {

    return function (value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

        const valid: boolean = value instanceof globalThis.Date;

        if(valid) {

            value = formatter(value);
        }

        return {valid, value};

    }
}
