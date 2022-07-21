var homeModule = angular.module('MyApp');

homeModule.factory('sampleApiCall', function($http, $q) {
    return {
        'getUsersList': function(url) {
            return $http.get(url);
        }
    }
});