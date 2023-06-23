import Merges from "./record/merges.js";
import Syslog from "./syslog.js";
import Level from "./level/level.js";
import Keys from "./level/array/keys.js";


export default function Multi<
    Arguments extends unknown[] = unknown[]
>(
    syslogs : Syslog<Arguments>[]
) : Syslog<Arguments> {

    return Merges(Keys, syslogs);
}

export {Multi as MultiSyslog}
export {Multi as SyslogMulti}