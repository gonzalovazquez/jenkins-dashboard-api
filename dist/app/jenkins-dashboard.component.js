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
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var jenkins_dashboard_service_1 = require('./jenkins-dashboard.service');
require('./rxjs-operators');
var JenkinsDashboardAppComponent = (function () {
    function JenkinsDashboardAppComponent(jenkinsService) {
        this.jenkinsService = jenkinsService;
        this.title = 'Jenkins Dashboard';
    }
    JenkinsDashboardAppComponent.prototype.getJobs = function () {
        var _this = this;
        this.jenkinsService.getJobs()
            .subscribe(function (jobs) { return _this.jobs = jobs; }, function (error) { return _this.errorMessage = error; });
    };
    JenkinsDashboardAppComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    JenkinsDashboardAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jenkins-dashboard-app',
            templateUrl: 'jenkins-dashboard.component.html',
            styleUrls: ['jenkins-dashboard.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES],
            providers: [jenkins_dashboard_service_1.JenkinsDashboardService]
        }), 
        __metadata('design:paramtypes', [jenkins_dashboard_service_1.JenkinsDashboardService])
    ], JenkinsDashboardAppComponent);
    return JenkinsDashboardAppComponent;
}());
exports.JenkinsDashboardAppComponent = JenkinsDashboardAppComponent;
//# sourceMappingURL=jenkins-dashboard.component.js.map