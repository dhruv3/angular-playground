const app = angular.module("mainApp", []);

app.controller("mainCtrl", function($scope){
    $scope.userName = "";
    
    function submit(){
        debugger;
    }
    $scope.submit = submit;
})