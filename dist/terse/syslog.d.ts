export default interface Syslog<Arguments extends unknown[] = unknown[]> {
    emerg(...argument: Arguments): any;
    alert(...argument: Arguments): any;
    crit(...argument: Arguments): any;
    error(...argument: Arguments): any;
    warning(...argument: Arguments): any;
    notice(...argument: Arguments): any;
    info(...argument: Arguments): any;
    debug(...argument: Arguments): any;
}
