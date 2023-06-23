import VerboseSyslog from '../syslog.js';
import VerboseSyslogInfer from '../parameter/infer.js';
import Syslog from './syslog.js';
import MainFromVerbose from "../terse/from-verbose.js";


export default class FromVerbose<Terse extends VerboseSyslog> extends MainFromVerbose<Terse> implements Syslog<VerboseSyslogInfer<Terse>> {

    critical(...argument: VerboseSyslogInfer<Terse>) {

        this.crit(...argument);
    }

    emergency(...argument: VerboseSyslogInfer<Terse>) {

        this.emerg(...argument);
    }

    informational(...argument: VerboseSyslogInfer<Terse>) {

        this.info(...argument);
    }

}
