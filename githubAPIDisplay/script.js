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

        const onRepos = function(response){
            $scope.repos = response.data;
        }
        const searchSuccess = function(response){
            $scope.searchUser = response.data;
            $http.get($scope.searchUser.repos_url)
                .then(onRepos, searchFail);
        }
        const searchFail = function(response){
            $scope.error = response;
        }
        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                .then(searchSuccess, searchFail);
        }       
    }

    app.controller("mainCtrl", mainController)
}());
