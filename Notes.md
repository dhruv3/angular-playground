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

