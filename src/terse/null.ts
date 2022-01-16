import Syslog from './syslog';

export default class Null<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {

    constructor() {}
    alert(...argument: Arguments) {}
    crit(...argument: Arguments) {}
    debug(...argument: Arguments) {}
    emerg(...argument: Arguments) {}
    error(...argument: Arguments) {}
    info(...argument: Arguments) {}
    notice(...argument: Arguments) {}
    warning(...argument: Arguments) {}
}
