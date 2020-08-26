import TerseSyslog from "./terse/syslog";
import TerseSyslogInfer from "./terse/parameter/infer";
import Syslog from "./syslog";

export default class FromTerse<Terse extends TerseSyslog> implements Syslog<TerseSyslogInfer<Terse>> {

    constructor(public terse : Terse) {
    }

    alert(...argument: TerseSyslogInfer<Terse>) {

        this.terse.alert(...argument);
    }

    critical(...argument: TerseSyslogInfer<Terse>) {

        this.terse.crit(...argument);
    }

    debug(...argument: TerseSyslogInfer<Terse>) {

        this.terse.debug(...argument);
    }

    emergency(...argument: TerseSyslogInfer<Terse>) {

        this.terse.emerg(...argument);
    }

    error(...argument: TerseSyslogInfer<Terse>) {

        this.terse.error(...argument);
    }

    informational(...argument: TerseSyslogInfer<Terse>) {

        this.terse.info(...argument);
    }

    notice(...argument: TerseSyslogInfer<Terse>) {

        this.terse.notice(...argument);
    }

    warning(...argument: TerseSyslogInfer<Terse>) {

        this.terse.warning(...argument);
    }


}
