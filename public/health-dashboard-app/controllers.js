(function(angular) {
    'use strict';

    var appControllers = angular.module('healthDashboardApp.controllers', []);

    // Multiple controllers in one file makes me feel icky, but I wasted too much time trying
    // to make a standard AMD organization work for this. :-( If I had my way, I'd prefer to
    // put each controller into its dedicated class -- assuming the controllers are large and
    // featureful enough to really merit being controllers, at least. I also want a pony.


    appControllers.controller('demographicsCtrl', [
        '$scope',
        function ($scope) {
            $scope.name = 'John Smith';
            $scope.gender = 'male';
            $scope.age  = 34;
        }
    ]);


    appControllers.controller('healthScoreCtrl', [
        '$scope',
        function ($scope) {
            $scope.overall  = 'B';
            $scope.diet     = 'A';
            $scope.exercise = 'C';
            $scope.stress   = 'B';
            $scope.showDetails = false;

            $scope.toggleShowDetails = function() {
                this.showDetails = !this.showDetails;
            };
        }
    ]);


    appControllers.controller('vitalsCtrl', [
        '$scope',
        function ($scope) {
            $scope.height = 1.8;    // meters
            $scope.weight = 77.0;   // kg
            $scope.bloodPressure = {
                systolic: 110,
                diastolic: 65
            }
        }
    ]);


    appControllers.controller('exerciseCtrl', [
        '$scope',
        function ($scope) {
            $scope.walkDistance = 10.0;   // km
            $scope.jogDistance  =  5.0;   // km
            $scope.runDistance  =  1.2;   // km

            $scope.totalDistance = function() {
                var sum = parseFloat($scope.walkDistance || 0) +
                          parseFloat($scope.jogDistance  || 0) +
                          parseFloat($scope.runDistance  || 0);
                return sum.toFixed(1);
            };

        }
    ]);

}(angular));
