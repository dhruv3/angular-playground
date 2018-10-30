# Creating Angular Bookmark list 

## Lecture 2
* ng-app: Angular app searches for this and implements its functionality.
* ng-init: Variables are initialized
* ng-model: Binds input and text

## Lecture 3
* angular.module: takes 2 args: main module and array of dependencies.
* controller: define controller name and pass a function that tells what it does. Next in html set `ng-controller` as well.
* ng-repeat
We have defined a main controller with two arrays of objects, category and bookmarks.

Think of scope as the glue between the controller and the view.

## Lecture 4
Revealing module pattern used to set current category.
* ng-class:
```html
<li ng-repeat = "category in categories" ng-class="{'active': isCurrCategory(category)">
```
* filter
```html
<div ng-repeat = "bookmark in bookmarks | filter:{category: currCategory.name}">
```

## Lecture 5
* ng-if: show something if the expression evaluated to true

## Lecture 6
form submit handled in angular.

## Lecture 7
ng-click, ng-submit, and other action directives is you can actually call more than one method when that action is actually executed by the users.

angular.copy: Done so as to ensure that model binding does not take place.