export default class Callback {
    constructor(callback) {
        this.callback = callback;
    }
    alert(...argument) {
        this.callback('alert', ...argument);
    }
    critical(...argument) {
        this.callback('critical', ...argument);
    }
    debug(...argument) {
        this.callback('debug', ...argument);
    }
    emergency(...argument) {
        this.callback('emergency', ...argument);
    }
    error(...argument) {
        this.callback('error', ...argument);
    }
    informational(...argument) {
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