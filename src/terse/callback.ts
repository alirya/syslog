import Syslog from './syslog.js';
import RecordCallback from "../record/callback.js";
import Keys from "./level/array/keys.js";

export default function Callback<
    Arguments extends unknown[] = unknown[]
>(
    callback : (severity:string, ...args:Arguments)=>void
) : Syslog<Arguments> {

    return RecordCallback(Keys, callback)
}

export {Callback as TerseSyslogCallback}
