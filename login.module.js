var loginModule = angular.module("MyApp");

loginModule.controller('loginController', ['$scope', '$location', function($scope, $location) {
    $scope.username = '';
    $scope.password = '';
    $scope.isPasswordVisible = false;

    $scope.validateUser = function() {
        var isUsername = RegExp("^[a-zA-Z ]{4,}$").test($scope.username);
        var isPassword = RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$&*~]).{8,}$").test($scope.password);
        if(isUsername && isPassword) {
            $location.path('/home');
        } else {
            alert("Username or Password Invalid");
        }
    }

    $scope.changeVisibility = function() {
        $scope.isPasswordVisible = !$scope.isPasswordVisible;
    }
}]);