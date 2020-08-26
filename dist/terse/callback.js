(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Callback {
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
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map