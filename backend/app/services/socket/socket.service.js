"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SocketService = (function () {
    function SocketService() {
        this.socket = null;
        this.messageRecieved = new core_1.EventEmitter();
        this.socket = io("http://2weiremote.azurewebsites.net");
    }
    SocketService.prototype.On = function (eventId, callback) {
        this.socket.on(eventId, function (data) {
            for (var _i = 0, _a = this.Handlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                if (handler.EventId === eventId) {
                    handler.Process(data);
                }
            }
        });
    };
    SocketService.prototype.Emit = function (eventId, data) {
        this.socket.emit(eventId, data);
        //console.log('---- socket event emitted ----- ' + eventId);
    };
    SocketService.prototype.RegisterHandler = function (handler) {
        this.Handlers.push(handler);
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map