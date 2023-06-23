import {DumpOptions} from "js-yaml";
import ReplacerOption from "../../replacer/replacer.js";


export type ReplacerArgumentOption<Type extends DumpOptions = DumpOptions> = Omit<Type, 'replacer'> & {
    replacer ?: ReplacerOption,
};

export default function Replacer<
    Type extends DumpOptions
>(
    option: ReplacerArgumentOption<Type>
) : Type {

    let replacer : DumpOptions['replacer'];

    if(option.replacer) {

        replacer = function (key, value) {
            return (option.replacer as ReplacerOption)(value).value;
        }
    }

    return {...option, replacer} as Type;
}

export {Replacer as WinstonOptionReplacer}