import {ReplacerArgumentOption, WinstonOptionReplacer} from "../option/replacer.js";
import LogFormYaml, {YamlOption} from "../../logform/format/yaml.js";
import {Format} from "logform";
import {Required} from "utility-types";
import Replacer from "../../replacer/replacer.js";


export type YamlArgumentsOption = Omit<YamlOption, 'replacer'> & {
    replacer ?: Replacer
}

export const WinstonYamlOptionDefault: Required<YamlArgumentsOption, 'format'|'timezone'> = Object.freeze({
    format : 'YYYY/MM/DD HH-mm-ssZZ',
    timezone : 'UTC',
});

export default function Yaml(option: Partial<ReplacerArgumentOption> = {}) : Format {

    const required = Object.assign({}, WinstonYamlOptionDefault, option);

    return new LogFormYaml(WinstonOptionReplacer(required));
}