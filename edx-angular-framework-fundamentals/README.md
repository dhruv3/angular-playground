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
  * ng-class: injects a class into your element based on an Angular expression.
  * ng-style: injects inline CSS styles into an element.
  * ng-repeat
  * ng-option allows you to create dynamic <option> tag lists within a <select>. You can use an ng-repeat to accomplish the same effect, but ng-option reduces the memory footprint, and ng-option also provides more customizability when dealing with how the selected option transfers to the value conveyed to the model with ng-model.

## Promises in Angular
$q is an in-built Angular module to work with Promises.
### Declaring a Promise
Inject $q as a dependency into your module.

## Forms in Angular
### Creating a Form
Add an object to hold all the data parameters from the form in a controller.
```js
$scope.formValues = {}
```
Add ng-model to each of the form elements so that their inputs can be two-way bound to the object.
```html
<input type='text' name='First' ng-model='formValues.first'>First Name</input>
<input type='text' name='Last' ng-model='formValues.last'>Last Name</input>
<input type='text' name='Email' ng-model='formValues.email'>Email</input>
```
### Form Submission
To submit a form in Angular, you simply need to bind a function to the ng-submit directive in a submit-type HTML element.
```html
<button type='submit' ng-submit='submit()'>Submit</button>
```
