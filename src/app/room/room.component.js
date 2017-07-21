"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RoomComponent = (function () {
    function RoomComponent(authService, router, roomService, alertService, messService, confirmService, acceptService) {
        this.authService = authService;
        this.router = router;
        this.roomService = roomService;
        this.alertService = alertService;
        this.messService = messService;
        this.confirmService = confirmService;
        this.acceptService = acceptService;
        this.model = {};
        this.rooms = [];
        this.user = {};
        this.loading = false;
        this.readOnly = true;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged();
        this.loadAllRooms();
        this.subscription = this.acceptService.getAcceptChangeEmitter()
            .subscribe(function (resp) { return _this.selectedVal(resp); });
    };
    RoomComponent.prototype.selectedVal = function (resp) {
        if (resp == "aceptar") {
            this["delete"]();
        }
        else if (resp == "cancelar") {
            this.model = {};
            this.readOnly = true;
        }
    };
    RoomComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RoomComponent.prototype["delete"] = function () {
        var _this = this;
        this.loading = true;
        this.model.accion = this.accion;
        this.roomService.mantenimiento(this.model)
            .subscribe(function (data) {
            if (data.success) {
                // this.alertService.success('Registro eliminado con éxito', true);
                _this.messService.success('Registro eliminado con éxito');
                _this.loading = false;
                _this.loadAllRooms();
            }
            else {
                _this.messService.error(data.mensaje);
                _this.loading = false;
                jQuery("#habitacionModal").modal("hide");
            }
        }, function (error) {
            _this.messService.error('Ocurrió al eliminar el registro');
            console.log(error);
            _this.loading = false;
        });
    };
    RoomComponent.prototype.guardar = function (form) {
        var _this = this;
        this.loading = true;
        this.model.accion = this.accion;
        var mensaje = "";
        var mensaje_err = "";
        switch (this.accion) {
            case 'I':
                mensaje = 'Registro creado con éxito';
                mensaje_err = 'Ocurrió al crear el registro';
                break;
            case 'U':
                mensaje = 'Registro modificado con éxito';
                mensaje_err = 'Ocurrió al modificar el registro';
                break;
        }
        this.roomService.mantenimiento(this.model)
            .subscribe(function (data) {
            if (data.success) {
                _this.messService.success(mensaje);
                _this.loading = false;
                _this.loadAllRooms();
                form.resetForm();
                jQuery("#habitacionModal").modal("hide");
            }
            else {
                _this.alertService.error(data.mensaje);
                _this.loading = false;
                jQuery("#habitacionModal").modal("hide");
            }
        }, function (error) {
            _this.alertService.error(mensaje_err);
            console.log(error);
            _this.loading = false;
            jQuery("#habitacionModal").modal("hide");
        });
    };
    RoomComponent.prototype.setNuevo = function () {
        this.accion = 'I';
        this.model = {};
        this.model.idHabitacion = 0;
        this.readOnly = false;
    };
    RoomComponent.prototype.setModi = function (model) {
        this.accion = 'U';
        this.model = Object.assign({}, model);
        this.readOnly = false;
    };
    RoomComponent.prototype.setElim = function (model) {
        this.accion = 'D';
        this.model = Object.assign({}, model);
        this.confirmService.go('¿Desea eliminar el registro?');
    };
    RoomComponent.prototype.loadAllRooms = function () {
        var _this = this;
        this.roomService.getAll().subscribe(function (rooms) { _this.rooms = rooms; });
    };
    RoomComponent.prototype.isLogged = function () {
        var _this = this;
        this.authService.isLogged().subscribe(function (response) {
            if (!response.success)
                _this.router.navigate(['/login']);
        }, function (error) { return _this.router.navigate(['/login']); });
    };
    return RoomComponent;
}());
RoomComponent = __decorate([
    core_1.Component({
        selector: 'app-room',
        templateUrl: './room.component.html',
        styleUrls: ['./room.component.css']
    })
], RoomComponent);
exports.RoomComponent = RoomComponent;
