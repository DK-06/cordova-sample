var homeModule = angular.module('MyApp');

homeModule.controller('homeController', ['$scope', '$location', 'sampleApiCall', function($scope, $location, sampleApiCall) {
    angular.element(document).ready(function () {
        $scope.apiCall();
    });
    $scope.apiCall = function() {
        $scope.usersList = [];
        sampleApiCall.getUsersList("https://jsonplaceholder.typicode.com/photos/").then(
            function successResponse(response) {
                $scope.usersList = response.data;
            },
            function errorResponse(response) {
                console.log(response);
            }
        );
    };

    $scope.goBack = function() {
        $location.path('/login');
    }
}]);