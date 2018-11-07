(function(){
    const app = angular.module("mainApp", []);

    const mainController = function($scope, $http){
        $scope.message = "Working with GitHub API";
        const success = function(response){
            $scope.user = response.data;
        }
        const fail = function(response){
            $scope.error = response;
        }
        $http.get("https://api.github.com/users/dhruv3")
            .then(success, fail);
        
    }

    app.controller("mainCtrl", mainController)
}());
