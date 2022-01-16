import Syslog from './syslog';

export default class Null<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {

    constructor() {}
    alert(...argument: Arguments) {}
    critical(...argument: Arguments) {}
    debug(...argument: Arguments) {}
    emergency(...argument: Arguments) {}
    error(...argument: Arguments) {}
    informational(...argument: Arguments) {}
    notice(...argument: Arguments) {}
    warning(...argument: Arguments) {}
}
