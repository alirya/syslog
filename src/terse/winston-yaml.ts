import Winston from "winston";
import Syslog from "./syslog";
import Yaml, {YamlOption} from "../logform/format/yaml";
// import Default from "../js-yaml/dump-option/default";
import DefaultReplacer from "../winston-yaml/replacer/default";
import Level from "../level/level";
import LevelNameTerse from "../string/level-name-terse";
import Callable from '@alirya/function/callable';
import Replacer from "../winston-yaml/replacer/replacer";

export type WinstonYamlOption = Omit<YamlOption, 'replacer'> & {
    level : Level;
    replacer : Replacer
}
// export type WinstonYamlOptionReplacer = [Callable<[any], boolean>, Callable<[any], any>][];

export const WinstonYamlOptionDefault: WinstonYamlOption = Object.freeze({
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

export function WinstonYamlOptionConvert(option : WinstonYamlOption) : YamlOption {

    const replacer = function (key, value) {

        for (const [validation, converter] of option.replacer) {

            if(validation(value, key)) {

                return converter(value);
            }
        }

        return value;
    }

    return {...option, replacer}
}






