"use strict";
exports.__esModule = true;
var CurrentMonth = (function () {
    // constructor(noMonth: number, anio: number) {
    // 	this.noMonth = noMonth;
    // 	this.anio = anio;
    // 	getFinMes();
    // 	this.days = Array(this.finMes).fill().map((x,i)=>i);
    // }
    function CurrentMonth() {
        this.days = [];
        this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.dias = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
        var date = new Date();
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    }
    CurrentMonth.prototype.getFinMes = function () {
        for (var i = 29; i <= 32; i++) {
            if (this.noMonth < new Date(this.anio, this.noMonth, i, 0, 0, 0, 0).getMonth()) {
                this.finMes = i - 1;
                return;
            }
        }
    };
    CurrentMonth.prototype.setDays = function () {
        this.days = [];
        for (var i = 0; i < this.finMes; i++) {
            this.days.push(new dayReserve(i));
        }
    };
    CurrentMonth.prototype.nextMonth = function () {
        var date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
        date.setMonth(date.getMonth() + 1);
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    };
    CurrentMonth.prototype.previousMonth = function () {
        var date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
        date.setMonth(date.getMonth() - 1);
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    };
    return CurrentMonth;
}());
exports.CurrentMonth = CurrentMonth;
var dayReserve = (function () {
    function dayReserve(day) {
        this.day = day;
        this.isReserved = false;
        this.isSelected = false;
    }
    dayReserve.prototype.select = function () {
        this.isSelected = !this.isSelected;
    };
    return dayReserve;
}());
exports.dayReserve = dayReserve;
