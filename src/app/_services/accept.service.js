"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var AcceptService = (function () {
    function AcceptService() {
        this.acceptChange = new core_1.EventEmitter();
    }
    AcceptService.prototype.emitAcceptChangeEvent = function (string) {
        this.acceptChange.emit(string);
    };
    AcceptService.prototype.getAcceptChangeEmitter = function () {
        return this.acceptChange;
    };
    return AcceptService;
}());
exports.AcceptService = AcceptService;
