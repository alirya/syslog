import TerseSyslog from '../terse/syslog.js';
import TerseSyslogInfer from '../terse/parameter/infer.js';
import Syslog from './syslog.js';
import MainFromTerse from "../from-terse";

export default class FromTerse<Terse extends TerseSyslog> extends MainFromTerse<Terse> implements Syslog<TerseSyslogInfer<Terse>> {

    crit(...argument: TerseSyslogInfer<Terse>) {

        this.critical(...argument);
    }

    emerg(...argument: TerseSyslogInfer<Terse>) {

        this.emergency(...argument);
    }

    info(...argument: TerseSyslogInfer<Terse>) {

        this.informational(...argument);
    }


}
