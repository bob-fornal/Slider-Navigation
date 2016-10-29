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
var WrapperPageComponent = (function () {
    function WrapperPageComponent() {
    }
    __decorate([
        core_1.Input('Page'), 
        __metadata('design:type', Object)
    ], WrapperPageComponent.prototype, "page", void 0);
    __decorate([
        core_1.Input('Horizontal'), 
        __metadata('design:type', Number)
    ], WrapperPageComponent.prototype, "horizontal", void 0);
    __decorate([
        core_1.Input('Vertical'), 
        __metadata('design:type', Number)
    ], WrapperPageComponent.prototype, "vertical", void 0);
    WrapperPageComponent = __decorate([
        core_1.Component({
            selector: 'wr-page',
            templateUrl: './app/components/wr-page.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WrapperPageComponent);
    return WrapperPageComponent;
}());
exports.WrapperPageComponent = WrapperPageComponent;
//# sourceMappingURL=wr-page.component.js.map