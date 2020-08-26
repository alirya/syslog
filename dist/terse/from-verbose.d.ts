import VerboseSyslog from "../syslog";
import VerboseSyslogInfer from "../parameter/infer";
import Syslog from "./syslog";
export default class FromVerbose<Terse extends VerboseSyslog> implements Syslog<VerboseSyslogInfer<Terse>> {
    verbose: Terse;
    constructor(verbose: Terse);
    alert(...argument: VerboseSyslogInfer<Terse>): void;
    crit(...argument: VerboseSyslogInfer<Terse>): void;
    debug(...argument: VerboseSyslogInfer<Terse>): void;
    emerg(...argument: VerboseSyslogInfer<Terse>): void;
    error(...argument: VerboseSyslogInfer<Terse>): void;
    info(...argument: VerboseSyslogInfer<Terse>): void;
    notice(...argument: VerboseSyslogInfer<Terse>): void;
    warning(...argument: VerboseSyslogInfer<Terse>): void;
}
