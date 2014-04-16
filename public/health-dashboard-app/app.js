(function(angular) {
    'use strict';

    // The app itself
    var healthDashboardApp = angular.module('healthDashboardApp', [
        'healthDashboardApp.controllers'

    ]).config([
        function() {
            console.log('Hello World', arguments, this);
        }
    ]);

}(angular));
