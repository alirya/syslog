import Syslog from "../syslog.js";
import {TerseLevelRecord} from "../terse/level/record/level.js";
import {LevelRecord} from "../level/record/level.js";
import {TerseSyslog} from "../terse/syslog.js";
import {IsFunction} from '@axiona/function/boolean/function.js';
import EnumStringKeys from "../array/enum-string-keys.js";

export default function Insensitive<Level extends TerseLevelRecord>(
    logger : TerseSyslog,
    level : Level
) : TerseSyslog;

export default function Insensitive<Level extends LevelRecord>(
    logger : Syslog,
    level : Level
) : Syslog;

export default function Insensitive<Level extends TerseLevelRecord|LevelRecord>(
    logger : Syslog|TerseSyslog ,
    level : Level
) : Syslog|TerseSyslog {

    const syslog = {};

    for (const key of EnumStringKeys(level as Record<string, number>)) {

        let lower = key.toLowerCase();
        let upper = key.toUpperCase();
        let sourceKey : string;
        let targetKey : string;

        if(IsFunction(logger[lower])) {

            sourceKey = lower;
            targetKey = lower;

        } else if(IsFunction(logger[upper])) {

            sourceKey = upper;
            targetKey = lower;

        } else {

            throw new TypeError(`Severity ${key} is not defined`);
        }

        syslog[targetKey] = (...args : any[]) => logger[sourceKey as string](...args);
    }

    return syslog as Syslog|TerseSyslog;
}


