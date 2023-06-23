import Replacer, {ReplacerReturn} from './replacer.js';

export default function  Buffer(value: any, formatted:any[] = [], parent?: Replacer) : ReplacerReturn {

    const valid: boolean = globalThis.Buffer.isBuffer(value);

    if(valid) {

        value = `<Buffer length:${value.length}>`;
    }

    return {value, valid};
}
