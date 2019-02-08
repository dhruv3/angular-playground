```html
<html ng-app>
```
The ng-app attribute represents an AngularJS directive, named ngApp.
This directive is used to flag the HTML element that AngularJS should consider to be the root element of our application.

Double-curly binding with an expression:
```html
Nothing here {{'yet' + '!'}}
```
Binding will result in efficient continuous updates whenever the result of the expression evaluation changes.
AngularJS expressions are JavaScript-like code snippets that are evaluated by AngularJS in the context of the current model scope, rather than within the scope of the global context (window).

## Bootstrapping AngularJS Applications
There are 3 important things that happen during the bootstrap phase:
1. The injector that will be used for dependency injection is created.
2. The injector will then create the root scope that will become the context for the model of our application.
3. AngularJS will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.

Once an application is bootstrapped, it will then wait for incoming browser events (such as mouse clicks, key presses or incoming HTTP responses) that might change the model. 
Once such an event occurs, AngularJS detects if it caused any model changes and if changes are found, AngularJS will reflect them in the view by updating all of the affected bindings.

ngRepeat
```html
<ul>
  <li ng-repeat="phone in phones">
      <span>{{phone.name}}</span>
      <p>{{phone.snippet}}</p>
  </li>
</ul>
```
The repeater tells AngularJS to create a <li> element for each phone in the list, using the <li> tag as the template.

ngController
```html
<body ng-controller="PhoneListController">
</body>
```
PhoneListController is in charge of the DOM sub-tree under (and including) the <body> element.

```js
// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
```
We connected the dots between the presentation, data, and logic components as follows:
* The ngController directive, located on the <body> tag, references the name of our controller, PhoneListController (located in the JavaScript file app.js).
* The PhoneListController controller attaches the phone data to the $scope that was injected into our controller function. This scope is a prototypal descendant of the root scope that was created when the application was defined. This controller scope is available to all bindings located within the <body ng-controller="PhoneListController"> tag.

AngularJS scopes prototypically inherit from their parent scope, all the way up to the root scope of the application. As a result, assigning values directly on the scope makes it easy to share data across different parts of the page and create interactive applications.

## Components
Template + Controller combined together into reusable and isolated entities called components.

AngularJS will create a so called isolate scope for each instance of our component, which means no prototypal inheritance and no risk of our component affecting other parts of the application or vice versa.

