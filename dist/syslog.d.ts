export default interface Syslog<Arguments extends unknown[] = unknown[]> {
    emergency(...argument: Arguments): any;
    alert(...argument: Arguments): any;
    critical(...argument: Arguments): any;
    error(...argument: Arguments): any;
    warning(...argument: Arguments): any;
    notice(...argument: Arguments): any;
    informational(...argument: Arguments): any;
    debug(...argument: Arguments): any;
}
