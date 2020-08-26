import TerseSyslog from "./terse/syslog";
import TerseSyslogInfer from "./terse/parameter/infer";
import Syslog from "./syslog";
export default class FromTerse<Terse extends TerseSyslog> implements Syslog<TerseSyslogInfer<Terse>> {
    terse: Terse;
    constructor(terse: Terse);
    alert(...argument: TerseSyslogInfer<Terse>): void;
    critical(...argument: TerseSyslogInfer<Terse>): void;
    debug(...argument: TerseSyslogInfer<Terse>): void;
    emergency(...argument: TerseSyslogInfer<Terse>): void;
    error(...argument: TerseSyslogInfer<Terse>): void;
    informational(...argument: TerseSyslogInfer<Terse>): void;
    notice(...argument: TerseSyslogInfer<Terse>): void;
    warning(...argument: TerseSyslogInfer<Terse>): void;
}
