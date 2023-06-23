import Syslog from "../syslog.js";
import Keys from "../level/array/keys.js";
import Level from "../level/level.js";
import {TerseLevel} from "../terse/level/level.js";
import {TerseSyslog} from "../terse/syslog.js";


export default function Merges<Key extends typeof Level, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : Syslog<Arguments>[]
) : Syslog<Arguments>;

export default function Merges<Key extends typeof TerseLevel, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : TerseSyslog<Arguments>[]
) : TerseSyslog<Arguments>;

export default function Merges<Key extends typeof Level | typeof TerseLevel, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : Syslog<Arguments>[]|TerseSyslog<Arguments>[]
) : Syslog<Arguments>|TerseSyslog<Arguments> {

    return Object.assign({}, ...keys.map(property => {

        const key = (property as string).toLowerCase();

        const fn = function (...argument) {

            for (const syslog of syslogs) {

                syslog[key](...argument);
            }
        }

        return {[key] : fn}
    }));
}

