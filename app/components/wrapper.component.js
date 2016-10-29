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
var core_1 = require('@angular/core');
var WrapperComponent = (function () {
    function WrapperComponent() {
        this.activePosition = (typeof this.startPosition === 'undefined')
            ? { horizontal: 0, vertical: 0 }
            : this.startPosition;
        this.activeStyle = this.generateStyle();
        this.hoveredElement = {
            active: false
        };
    }
    WrapperComponent.prototype.enter = function (element) {
        this.hoveredElement = element;
    };
    WrapperComponent.prototype.leave = function () {
        this.hoveredElement = { active: false };
    };
    WrapperComponent.prototype.select = function (position) {
        this.activePosition = position;
        this.activeStyle = this.generateStyle();
    };
    WrapperComponent.prototype.generateStyle = function () {
        var horizontal = this.activePosition.horizontal * 100;
        var vertical = this.activePosition.vertical * 100;
        var active_style = {
            horizontal: (horizontal === 0) ? '0' : "-" + horizontal + "vw",
            vertical: (vertical === 0) ? '0' : "-" + vertical + "vh"
        };
        console.log(active_style);
        return active_style;
    };
    __decorate([
        core_1.Input('Structure'), 
        __metadata('design:type', Array)
    ], WrapperComponent.prototype, "structure", void 0);
    __decorate([
        core_1.Input('StartPosition'), 
        __metadata('design:type', Object)
    ], WrapperComponent.prototype, "startPosition", void 0);
    WrapperComponent = __decorate([
        core_1.Component({
            selector: 'wrapper',
            templateUrl: './app/components/wrapper.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WrapperComponent);
    return WrapperComponent;
}());
exports.WrapperComponent = WrapperComponent;
//# sourceMappingURL=wrapper.component.js.map