"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var ConfirmService = (function () {
    function ConfirmService() {
        this.subject = new Subject_1.Subject();
        this.navchange = new core_1.EventEmitter();
    }
    ConfirmService.prototype.emitNavChangeEvent = function (number) {
        this.navchange.emit(number);
    };
    ConfirmService.prototype.getNavChangeEmitter = function () {
        return this.navchange;
    };
    ConfirmService.prototype.go = function (message) {
        this.subject.next({ text: message });
    };
    ConfirmService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return ConfirmService;
}());
ConfirmService = __decorate([
    core_1.Injectable()
], ConfirmService);
exports.ConfirmService = ConfirmService;
