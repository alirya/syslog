import Syslog from "../syslog.js";
import Keys from "../level/array/keys.js";
import Level from "../level/level.js";
import {TerseLevel} from "../terse/level/level.js";
import {TerseSyslog} from "../terse/syslog.js";


export default function Callback<Key extends typeof Level, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    callback : (severity:keyof Key, ...args:Arguments) => void
) : Syslog<Arguments>;

export default function Callback<Key extends typeof TerseLevel, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    callback : (severity:keyof Key, ...args:Arguments) => void
) : TerseSyslog<Arguments>;

export default function Callback<Key extends typeof Level | typeof TerseLevel, Arguments extends unknown[] = unknown[]>(
    keys : ReadonlyArray<keyof Key>,
    callback : (severity:keyof Key, ...args:Arguments) => void
) : Syslog<Arguments>|TerseSyslog<Arguments> {

    return Object.assign({}, ...keys.map(property => {

        const key = (property as string).toLowerCase();

        const fn = function (...argument : Arguments) {

            callback(property, ...argument)
        }

        return {[key] : fn}
    }));
}

