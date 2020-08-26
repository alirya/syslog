import Syslog from "./syslog";
import Function from "@dikac/t-function/function";

export default class Callback<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {

    constructor(
        public callback : Function<[string, ...Arguments], void>) {
    }

    alert(...argument: Arguments) {

        this.callback('alert', ...argument);
    }

    crit(...argument: Arguments) {

        this.callback('critical', ...argument);
    }

    debug(...argument: Arguments) {

        this.callback('debug', ...argument);
    }

    emerg(...argument: Arguments) {

        this.callback('emergency', ...argument);
    }

    error(...argument: Arguments) {

        this.callback('error', ...argument);
    }

    info(...argument: Arguments) {

        this.callback('informational', ...argument);
    }

    notice(...argument: Arguments) {

        this.callback('notice', ...argument);
    }

    warning(...argument: Arguments) {

        this.callback('warning', ...argument);
    }
}
