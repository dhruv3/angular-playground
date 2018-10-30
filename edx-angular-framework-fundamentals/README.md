# AngularJS: Fundamental Notes

[Link to the course](https://www.edx.org/course/angularjs-framework-fundamentals)

* The $digest cycle is the function to update the DOM that Angular calls whenever the data is updated.
* Code:
  ```js
  var app = angular.module("mainApp", []);
  app.controller(...);
  app.constant("constantName", "constantValue")
  ```
* Most common example of DI is `$scope`. Controllers need access to the `$scope` object in order to bind values to the view. The `$scope` object is used to make the model available to the view. It is also referred to as the view model.
* Code:
  ```js
  $scope.$watch('model.mainDish', function (newValue, oldValue) {
      if (newValue === 'BBQ Chicken Pizza') {
          alert('You have selected the BBQ Chicken Pizza!');
      }
  });
  ```
  Note that the first parameter of $scope.$watch() in this case is 'mainDish'. This first parameter is a string used to tell the $watch function which $scope variable to watch. In this case, it is watching $scope.mainDish. The second parameter is a function that has two parameters, newValue and oldValue, which represent what the $scope variable changed to when the watch was triggered, and what it was before it changed.
* ng-directives:
  * ng-show and ng-hide: 
    
    Code:
    ```html
    <div ng-show='truthyValue == true'>
    Show this text using ng-show
    </div>
    <div ng-hide='truthyValue == true'>
    Hide this text using ng-hide
    </div>
    ```
  * ng-if
  

