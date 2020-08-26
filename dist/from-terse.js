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
    class FromTerse {
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
    exports.default = FromTerse;
});
//# sourceMappingURL=from-terse.js.map