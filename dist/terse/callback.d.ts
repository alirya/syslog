import Syslog from "./syslog";
import Function from "@dikac/t-function/function";
export default class Callback<Arguments extends unknown[] = unknown[]> implements Syslog<Arguments> {
    callback: Function<[string, ...Arguments], void>;
    constructor(callback: Function<[string, ...Arguments], void>);
    alert(...argument: Arguments): void;
    crit(...argument: Arguments): void;
    debug(...argument: Arguments): void;
    emerg(...argument: Arguments): void;
    error(...argument: Arguments): void;
    info(...argument: Arguments): void;
    notice(...argument: Arguments): void;
    warning(...argument: Arguments): void;
}
