import Syslog from './syslog.js';
import RecordCallback from "../record/callback.js";
import Level from "./level/level.js";

export default function Callback<
    Arguments extends unknown[] = unknown[]
>(
    callback : (severity:string, ...args:Arguments)=>void,
    severity: Level = Level.DEBUG
) : Syslog<Arguments> {

    return RecordCallback(Level, callback, severity)
}

export {Callback as TerseSyslogCallback}
