import Syslog from "./syslog";
export default class Callback<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {
    callback: (severity: string, ...args: Arguments) => void;
    constructor(callback: (severity: string, ...args: Arguments) => void);
    alert(...argument: Arguments): void;
    critical(...argument: Arguments): void;
    debug(...argument: Arguments): void;
    emergency(...argument: Arguments): void;
    error(...argument: Arguments): void;
    informational(...argument: Arguments): void;
    notice(...argument: Arguments): void;
    warning(...argument: Arguments): void;
}
