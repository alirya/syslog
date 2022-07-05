import Winston from "winston";
import Syslog from "./syslog";
import Yaml, {YamlOption} from "../logform/format/yaml";
import Default from "../js-yaml/dump-option/default";
import Level from "../level/level";
import LevelNameTerse from "../string/level-name-terse";

export type WinstonYamlOption = YamlOption & {level : Level}

export default function WinstonYaml(option : WinstonYamlOption) : Syslog<[string, ...any[]]> {

    return Winston.createLogger({

        levels : Winston.config.syslog.levels,
        level: LevelNameTerse(option.level),
        format: new Yaml(Default(option)),

        transports: [
            new Winston.transports.Console({
                level: LevelNameTerse(option.level),
            }),
        ]
    });
}






