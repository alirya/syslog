import {Logger} from "pino";
import Syslog from "../syslog.js";
import {TerseLevelRecord} from "../terse/level/record/level.js";
import {LevelRecord} from "../level/record/level.js";
import {TerseSyslog} from "../terse/syslog.js";
import Insensitive from "../record/insensitive.js";

export type AdapterLevelType = LevelRecord|TerseLevelRecord;

export default function Adapter<Type extends TerseLevelRecord>(pino : Logger<{customLevels: Type}>) : TerseSyslog<[string, ...any[]]>;
export default function Adapter<Type extends LevelRecord>(pino : Logger<{customLevels: Type}>) : Syslog<[string, ...any[]]>;

export default function Adapter<Type extends AdapterLevelType>(
    pino : Logger<{customLevels: Type}>
) : Syslog<[string, ...any[]]>|TerseSyslog<[string, ...any[]]> {

    const syslog = {};
    const insensitive = Insensitive(
        pino as any,
        pino.levels.values as TerseLevelRecord
    );

    for (const key in insensitive) {

        syslog[key] = (message : string, ...args : any[]) => insensitive[key as string](...args, message);
    }

    return syslog as Syslog<[string, ...any[]]>|TerseSyslog<[string, ...any[]]>;
}

export {Adapter as PinoAdapter}
