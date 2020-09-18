export default class FromTerse {
    constructor(terse) {
        this.terse = terse;
    }
    alert(...argument) {
        this.terse.alert(...argument);
    }
    critical(...argument) {
        this.terse.crit(...argument);
    }
    debug(...argument) {
        this.terse.debug(...argument);
    }
    emergency(...argument) {
        this.terse.emerg(...argument);
    }
    error(...argument) {
        this.terse.error(...argument);
    }
    informational(...argument) {
        this.terse.info(...argument);
    }
    notice(...argument) {
        this.terse.notice(...argument);
    }
    warning(...argument) {
        this.terse.warning(...argument);
    }
}
//# sourceMappingURL=from-terse.js.map