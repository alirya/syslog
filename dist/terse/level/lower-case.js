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
    var LowerCase;
    (function (LowerCase) {
        LowerCase[LowerCase["emerg"] = 0] = "emerg";
        LowerCase[LowerCase["alert"] = 1] = "alert";
        LowerCase[LowerCase["crit"] = 2] = "crit";
        LowerCase[LowerCase["error"] = 3] = "error";
        LowerCase[LowerCase["warning"] = 4] = "warning";
        LowerCase[LowerCase["notice"] = 5] = "notice";
        LowerCase[LowerCase["info"] = 6] = "info";
        LowerCase[LowerCase["debug"] = 7] = "debug";
    })(LowerCase || (LowerCase = {}));
    exports.default = LowerCase;
});
//# sourceMappingURL=lower-case.js.map