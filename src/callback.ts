import Syslog from "./syslog";

export default class Callback<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {

    constructor(
        public callback : (severity:string, ...args:Arguments)=>void) {
    }

    alert(...argument: Arguments) {

        this.callback('alert', ...argument);
    }

    critical(...argument: Arguments) {

        this.callback('critical', ...argument);
    }

    debug(...argument: Arguments) {

        this.callback('debug', ...argument);
    }

    emergency(...argument: Arguments) {

        this.callback('emergency', ...argument);
    }

    error(...argument: Arguments) {

        this.callback('error', ...argument);
    }

    informational(...argument: Arguments) {

        this.callback('informational', ...argument);
    }

    notice(...argument: Arguments) {

        this.callback('notice', ...argument);
    }

    warning(...argument: Arguments) {

        this.callback('warning', ...argument);
    }
}
