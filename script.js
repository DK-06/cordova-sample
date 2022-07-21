
var myApp = angular.module("MyApp",[
    'ngRoute',
]);

myApp.config(['$routeProvider',function($routeProvider){
$routeProvider.
    when('/login', {
        templateUrl: 'login.html',
        controller:'DeveloperController',
    })
    .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeController'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);

myApp.service('customService', function() {
    this.callServiceMethod = function() {
        console.log('This is from service');
    }
});

myApp.factory('customFactory', function() {
    return {
        callFactoryMethod: function() {
            console.log('This is from factory');
            return "Hello from factory";
        }
    }
});

myApp.controller('DeveloperController', ['$scope', 'customService', 'customFactory', function($scope, customService, customFactory) {
    $scope.name="asdsas";
    console.log('controller...');
    customService.callServiceMethod();
    var factoryData = customFactory.callFactoryMethod();
    console.log(factoryData);
 }]);
 
 myApp.controller('testing2', ['$scope', 'customService', 'customFactory', function($scope, customService, customFactory) {
    $scope.name="asdsas";
    console.log('controller...');
    customService.callServiceMethod();
    var factoryData = customFactory.callFactoryMethod();
    console.log(factoryData);
 }]);