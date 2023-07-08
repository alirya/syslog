import Merges from "./record/merges.js";
import Syslog from "./syslog.js";
import Keys from "./level/array/keys.js";


export default function Multi<
    Arguments extends unknown[] = unknown[]
>(
    syslogs : Syslog<Arguments>[]
) : Syslog<Arguments> & {syslogs:Syslog<Arguments>[]} {

    return Merges(Keys, syslogs);
}

export {Multi as MultiSyslog}
export {Multi as SyslogMulti}