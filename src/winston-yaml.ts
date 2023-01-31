import Winston from "winston";
import Syslog from "./syslog";
import Yaml, {YamlOption} from "./logform/format/yaml";
import WinstonYamlTerse, {
    WinstonYamlOption,
    // WinstonYamlOptionConvert,
    WinstonYamlOptionDefault
} from "./terse/winston-yaml";
import FromTerse from "./from-terse";

export {WinstonYamlOption, WinstonYamlOptionDefault/*, WinstonYamlOptionConvert*/};

export default function WinstonYaml(option : Partial<WinstonYamlOption> = {}) : Syslog<[string, ...any[]]> {

    return new FromTerse(WinstonYamlTerse(option));
}






