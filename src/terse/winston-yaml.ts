import Winston from "winston";
import Syslog from './syslog.js';
import Yaml, {YamlOption} from '../logform/format/yaml.js';
// import Default from "../js-yaml/dump-option/default.js";
import DefaultReplacer from '../winston-yaml/replacer/default.js';
import Level from '../level/level.js';
import LevelNameTerse from '../string/level-name-terse.js';
import Callable from '@alirya/function/callable.js';
import Replacer from '../winston-yaml/replacer/replacer.js';
import {Required} from "utility-types";

export type WinstonYamlOption = Omit<YamlOption, 'replacer'> & {
    level : Level;
    replacer ?: Replacer
}
// export type WinstonYamlOptionReplacer = [Callable<[any], boolean>, Callable<[any], any>][];

export const WinstonYamlOptionDefault: Required<WinstonYamlOption, 'level'|'replacer'|'format'|'timezone'> = Object.freeze({
    level : Level.DEBUG,
    replacer: Object.freeze(DefaultReplacer()) as Replacer,
    format : 'YYYY/MM/DD HH-mm-ssZZ',
    timezone : 'UTC',
});


export default function WinstonYaml(option : Partial<WinstonYamlOption> = {}) : Syslog<[string, ...any[]]> {

    const required = Object.assign({}, WinstonYamlOptionDefault, option);

    return Winston.createLogger({

        levels : Winston.config.syslog.levels,
        level: LevelNameTerse(required.level),
        format: new Yaml(WinstonYamlOptionConvert(required)),

        transports: [
            new Winston.transports.Console({
                level: LevelNameTerse(required.level),
            }),
        ]
    });
}

export function WinstonYamlOptionConvert(option : Required<WinstonYamlOption, 'replacer'>) : YamlOption {

    const replacer = function (key, value) {
        return option.replacer(value).value;
    }

    return {...option, replacer}
}






