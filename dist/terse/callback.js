export default class Callback {
    constructor(callback) {
        this.callback = callback;
    }
    alert(...argument) {
        this.callback('alert', ...argument);
    }
    crit(...argument) {
        this.callback('critical', ...argument);
    }
    debug(...argument) {
        this.callback('debug', ...argument);
    }
    emerg(...argument) {
        this.callback('emergency', ...argument);
    }
    error(...argument) {
        this.callback('error', ...argument);
    }
    info(...argument) {
        this.callback('informational', ...argument);
    }
    notice(...argument) {
        this.callback('notice', ...argument);
    }
    warning(...argument) {
        this.callback('warning', ...argument);
    }
}
//# sourceMappingURL=callback.js.map