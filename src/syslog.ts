export default interface Syslog<Arguments extends unknown[] = unknown[]> {

    emergency(...argument: Arguments);
    alert(...argument: Arguments);
    critical(...argument: Arguments);
    error(...argument: Arguments);
    warning(...argument: Arguments);
    notice(...argument: Arguments);
    informational(...argument: Arguments);
    debug(...argument: Arguments);

}
