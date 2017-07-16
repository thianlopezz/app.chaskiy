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
    function RoomComponent(roomService, alertService) {
        this.roomService = roomService;
        this.alertService = alertService;
        this.model = {};
        this.rooms = [];
        this.user = {};
        this.loading = false;
        this.user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwidXNlcm5hbWUiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJtZXRhIjp7fSwiX192IjowLCJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlcm5hbWUiOiJzZXZpbGF5aGEiLCJuYW1lIjoiQ2hyaXMiLCJfaWQiOiI1OGY1OWM2MmUxM2YzOTI1YTg2ZDZiYTkifSwiaWF0IjoxNDkzNzkzODI4LCJleHAiOjE0OTM3OTUyNjh9.ejjbix0MSOEiT3EPW57BsZlcn46umYMRDlDVthn35t0";
        localStorage.setItem('currentUser', JSON.stringify(this.user));
    }
    RoomComponent.prototype.ngOnInit = function () {
        this.loadAllRooms();
    };
    RoomComponent.prototype.guardar = function () {
        var _this = this;
        this.loading = true;
        this.roomService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registro creado con éxito', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RoomComponent.prototype.loadAllRooms = function () {
        var _this = this;
        this.roomService.getAll().subscribe(function (rooms) { _this.rooms = rooms; });
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
