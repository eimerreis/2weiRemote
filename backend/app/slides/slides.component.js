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
var socket_service_1 = require("../services/socket/socket.service");
var SlidesComponent = (function () {
    function SlidesComponent(socketService) {
        this.socketService = socketService;
        this.slides = SLIDES;
    }
    SlidesComponent.prototype.SlideClicked = function (slide) {
        this.socketService.Emit(SLIDE_CHANGED_EVENT, slide.number);
    };
    return SlidesComponent;
}());
SlidesComponent = __decorate([
    core_1.Component({
        selector: 'slides',
        templateUrl: 'app/slides/slides.component.html'
    }),
    __metadata("design:paramtypes", [socket_service_1.SocketService])
], SlidesComponent);
exports.SlidesComponent = SlidesComponent;
var SLIDE_CHANGED_EVENT = "change-slide";
var SLIDES = [
    { name: 'TVR Aufstellung', number: '1', image: 'TVRAufstellung.jpg' },
    { name: 'Gäste Aufstellung', number: '2' },
    { name: 'Tabelle', number: '3' },
    { name: 'Spieler Einzeln', number: '4' },
    { name: 'Teambild', number: '5' },
    { name: 'Chat', number: '7' },
    { name: 'Chat Erklärung', number: '8' },
    { name: 'Video-Wiederholung', number: '10' },
];
//# sourceMappingURL=slides.component.js.map