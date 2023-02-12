import Winston from "winston";
import Syslog from './syslog.js';
import Yaml, {YamlOption} from './logform/format/yaml.js';
import WinstonYamlTerse, {
    WinstonYamlOption,
    // WinstonYamlOptionConvert,
    WinstonYamlOptionDefault
} from './terse/winston-yaml.js';
import FromTerse from './from-terse.js';

export {WinstonYamlOption, WinstonYamlOptionDefault/*, WinstonYamlOptionConvert*/};

export default function WinstonYaml(option : Partial<WinstonYamlOption> = {}) : Syslog<[string, ...any[]]> {

    return new FromTerse(WinstonYamlTerse(option));
}






