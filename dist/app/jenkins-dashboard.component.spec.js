"use strict";
var testing_1 = require('@angular/core/testing');
var jenkins_dashboard_component_1 = require('../app/jenkins-dashboard.component');
testing_1.beforeEachProviders(function () { return [jenkins_dashboard_component_1.JenkinsDashboardAppComponent]; });
testing_1.describe('App: JenkinsDashboard', function () {
    testing_1.it('should create the app', testing_1.inject([jenkins_dashboard_component_1.JenkinsDashboardAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'jenkins-dashboard works!\'', testing_1.inject([jenkins_dashboard_component_1.JenkinsDashboardAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('jenkins-dashboard works!');
    }));
});
//# sourceMappingURL=jenkins-dashboard.component.spec.js.map