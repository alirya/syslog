export default class FromVerbose {
    constructor(verbose) {
        this.verbose = verbose;
    }
    alert(...argument) {
        this.verbose.alert(...argument);
    }
    crit(...argument) {
        this.verbose.critical(...argument);
    }
    debug(...argument) {
        this.verbose.debug(...argument);
    }
    emerg(...argument) {
        this.verbose.emergency(...argument);
    }
    error(...argument) {
        this.verbose.error(...argument);
    }
    info(...argument) {
        this.verbose.informational(...argument);
    }
    notice(...argument) {
        this.verbose.notice(...argument);
    }
    warning(...argument) {
        this.verbose.warning(...argument);
    }
}
//# sourceMappingURL=from-verbose.js.map