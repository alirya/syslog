import Syslog from "../syslog.js";
import Level from "../level/level.js";
import {TerseLevel} from "../terse/level/level.js";
import {TerseSyslog} from "../terse/syslog.js";
import {IsNumeric} from '@axiona/string/boolean/numeric.js';
import NoOp from '@axiona/function/no-op.js';
import Callable from '@axiona/function/callable.js';


export default function Callback<Arguments extends unknown[] = unknown[]>(
    enums : typeof Level,
    callback : Callable<[keyof typeof Level, ...Arguments], void >,
    level : Level
) : Syslog<Arguments>;

export default function Callback<Arguments extends unknown[] = unknown[]>(
    enums : typeof TerseLevel,
    callback : Callable<[keyof typeof TerseLevel, ...Arguments], void >,
    level : TerseLevel
) : TerseSyslog<Arguments>;

export default function Callback<Arguments extends unknown[] = unknown[]>(
    enums : typeof Level | typeof TerseLevel,
    callback :  Callable<[keyof typeof Level, ...Arguments], void> |
                Callable<[keyof typeof TerseLevel, ...Arguments], void>,
    level : Level | TerseLevel
) : Syslog<Arguments> | TerseSyslog<Arguments> {

    const functions = (Object.entries(enums) as [string, number][])
        .filter(([key, lvl]) => !IsNumeric(key))
        .map(([key, lvl]) => {

            let fn: (...args:Arguments) => void;

            if(lvl <= (level as number)) {

                fn = (...argument : Arguments) => {

                    callback(key as keyof typeof Level & TerseLevel, ...argument)
                }

            } else {

                fn = NoOp;
            }

            return {[key.toLowerCase()] : fn}

        })

    return Object.assign({}, ...functions);
}

