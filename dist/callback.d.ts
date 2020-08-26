import Syslog from "./syslog";
import Function from "@dikac/t-function/function";
export default class Callback<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {
    callback: Function<[string, ...Arguments], void>;
    constructor(callback: Function<[string, ...Arguments], void>);
    alert(...argument: Arguments): void;
    critical(...argument: Arguments): void;
    debug(...argument: Arguments): void;
    emergency(...argument: Arguments): void;
    error(...argument: Arguments): void;
    informational(...argument: Arguments): void;
    notice(...argument: Arguments): void;
    warning(...argument: Arguments): void;
}
