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
    var Level;
    (function (Level) {
        Level[Level["Emerg"] = 0] = "Emerg";
        Level[Level["Alert"] = 1] = "Alert";
        Level[Level["Crit"] = 2] = "Crit";
        Level[Level["Error"] = 3] = "Error";
        Level[Level["Warning"] = 4] = "Warning";
        Level[Level["Notice"] = 5] = "Notice";
        Level[Level["Info"] = 6] = "Info";
        Level[Level["Debug"] = 7] = "Debug";
    })(Level || (Level = {}));
    exports.default = Level;
});
//# sourceMappingURL=level.js.map