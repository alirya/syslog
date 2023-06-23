import {createLogger, LoggerOptions} from "winston";
import Syslog from '../syslog.js';
import FilterEnumStringKey from "../record/filter-enum-string-key.js";
import Insensitive from "../record/insensitive.js";
import {TerseSyslog} from "../terse/syslog.js";
import {LevelRecord} from "../level/record/level.js";
import {TerseLevelRecord} from "../terse/level/record/level.js";

export type WinstonLevelType = LevelRecord | TerseLevelRecord;

export type WinstonYamlOption<
    LevelT extends WinstonLevelType
> = Omit<LoggerOptions, 'levels'|'level'> & {
    level : keyof LevelT;
    levels : LevelT;
}

export default function Winston<LevelT extends TerseLevelRecord>(
    option : WinstonYamlOption<LevelT>
) : TerseSyslog<[string, ...any[]]>;

export default function Winston<LevelT extends LevelRecord>(
    option : WinstonYamlOption<LevelT>
) : Syslog<[string, ...any[]]>;

export default function Winston<
    LevelT extends WinstonLevelType
>(
    option : WinstonYamlOption<LevelT>
) : Syslog<[string, ...any[]]>|TerseSyslog<[string, ...any[]]> {

    const winstonOption : LoggerOptions = Object.assign(
        {},
        option,
        {
            levels: FilterEnumStringKey(option.levels)
        }
    ) as LoggerOptions;

     return Insensitive(createLogger(winstonOption), option.levels as TerseLevelRecord);
}






