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
    class FromVerbose {
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
    exports.default = FromVerbose;
});
//# sourceMappingURL=from-verbose.js.map