import Syslog from "../syslog.js";
import Keys from "../level/array/keys.js";
import Level from "../level/level.js";
import {TerseLevel} from "../terse/level/level.js";
import {TerseSyslog} from "../terse/syslog.js";


export type MergesType<
    Key extends typeof Level | typeof TerseLevel,
    Arguments extends unknown[] = unknown[]
> = MergesTypeSyslog<Key, Arguments> & {

    syslogs : MergesTypeSyslog<Key, Arguments>[];
}

export type MergesTypeSyslog<
    Key extends typeof Level | typeof TerseLevel,
    Arguments extends unknown[] = unknown[]
> = Key extends typeof Level ? Syslog<Arguments> : TerseSyslog<Arguments>;

export default function Merges<
    Key extends typeof Level, Arguments extends unknown[] = unknown[]
>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : Syslog<Arguments>[]
) : MergesType<Key, Arguments>;

export default function Merges<
    Key extends typeof TerseLevel, Arguments extends unknown[] = unknown[]
>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : TerseSyslog<Arguments>[]
) : MergesType<Key, Arguments>;

export default function Merges<
    Key extends typeof Level | typeof TerseLevel,
    Arguments extends unknown[] = unknown[]
>(
    keys : ReadonlyArray<keyof Key>,
    syslogs : MergesTypeSyslog<Key, Arguments>[]
) : MergesType<Key, Arguments> {

    const container = {syslogs};

    return Object.assign(container, ...keys.map(property => {

        const key = (property as string).toLowerCase();

        const fn = function (...argument) {

            for (const syslog of container.syslogs) {

                syslog[key](...argument);
            }
        }

        return {[key] : fn}
    }));
}

