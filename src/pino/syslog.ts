import Level from "../level/level.js";
import {
    Logger,
    pino,
    TransportMultiOptions,
    TransportSingleOptions
} from "pino";
import {LoggerOptions} from "pino";
import MainSyslog from "../syslog.js";
import {TerseLevel} from "../terse/level/level.js";
import ReverseLevel from "../record/reverse-level.js";
import {TerseSyslog} from "../terse/syslog.js";
import Adapter from "./adapter.js";
import {LevelRecord} from "../level/record/level.js";


const PinoReversedSeverity  = new Map<typeof Level | typeof TerseLevel, Record<string, number>>();


export default function Syslog(option: LoggerOptions, severity : typeof Level) : MainSyslog<[string, ...any[]]>;
export default function Syslog(option: LoggerOptions, severity : typeof TerseLevel) : TerseSyslog<[string, ...any[]]>;
export default function Syslog(option: LoggerOptions, severity : typeof Level | typeof TerseLevel) : MainSyslog<[string, ...any[]]>|TerseSyslog<[string, ...any[]]> {

    let reversedSeverity = PinoReversedSeverity.get(severity);

    if(!reversedSeverity) {

        reversedSeverity = Object.freeze(ReverseLevel(severity));
        PinoReversedSeverity.set(severity, reversedSeverity);
    }

    if(option.transport) {

        const transport: TransportMultiOptions & TransportSingleOptions = option.transport as TransportMultiOptions & TransportSingleOptions;

        if(!transport.options) {

            transport.options = {};
        }

        transport.options.customLevels = reversedSeverity;

        if(transport.targets) {

            for (const target of transport.targets) {

                transport.options.customLevels = reversedSeverity;
            }
        }
    }

    option.useOnlyCustomLevels = true;
    option.customLevels = reversedSeverity;

    return Adapter(pino(option) as Logger<{customLevels: LevelRecord}>)
}

export {Syslog as PinoSyslog}