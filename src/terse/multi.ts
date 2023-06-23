import Merges from "../record/merges.js";
import {TerseSyslog} from "./syslog.js";
import Keys from "./level/array/keys.js";


export default function Multi<
    Arguments extends unknown[] = unknown[]
>(
    syslogs : TerseSyslog<Arguments>[]
) : TerseSyslog<Arguments> {

    return Merges(Keys, syslogs);
}

export {Multi as MultiTerseSyslog}
export {Multi as TerseSyslogMulti}