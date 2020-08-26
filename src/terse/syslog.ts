export default interface Syslog<Arguments extends unknown[] = unknown[]> {

    emerg(...argument: Arguments);
    alert(...argument: Arguments);
    crit(...argument: Arguments);
    error(...argument: Arguments);
    warning(...argument: Arguments);
    notice(...argument: Arguments);
    info(...argument: Arguments);
    debug(...argument: Arguments);

}
