import Syslog from "./syslog";
export default class Null<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {
    constructor();
    alert(...argument: Arguments): void;
    critical(...argument: Arguments): void;
    debug(...argument: Arguments): void;
    emergency(...argument: Arguments): void;
    error(...argument: Arguments): void;
    informational(...argument: Arguments): void;
    notice(...argument: Arguments): void;
    warning(...argument: Arguments): void;
}
