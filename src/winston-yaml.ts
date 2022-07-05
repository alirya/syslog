import Winston from "winston";
import Syslog from "./syslog";
import Yaml, {YamlOption} from "./logform/format/yaml";
import WinstonYamlTerse, {WinstonYamlOption} from "./terse/winston-yaml";
import FromTerse from "./from-terse";

export {WinstonYamlOption};

export default function WinstonYaml(option : WinstonYamlOption) : Syslog<[string, ...any[]]> {

    return new FromTerse(WinstonYamlTerse(option));
}






