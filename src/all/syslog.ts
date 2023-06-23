import {TerseSyslog} from "../terse/syslog.js";
import MainSyslog from "../syslog.js";

export default interface Syslog<Arguments extends unknown[] = unknown[]> extends TerseSyslog, MainSyslog {}

export {Syslog as AllSyslog}
