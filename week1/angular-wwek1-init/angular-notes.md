# Angular Notes

* Install angular-cli:
  ```bash
  npm install -g @angular/cli@6.2.1
  ```
* Create a new folder and setup angular application
  ```bash
  ng new conFusion --style=scss
  ```
* Move into the `conFusion` folder and run:
  ```bash
  npm install
  ```
* Run the angular cli in-built server
  ```bash
  ng serve
  ```
Angular Architecture is like a Modular Architecture with root module(typically called AppModule) at the top.

Companian to `index.html` is `main.ts` file. It has the line that bootstrap the AppModule.
```js
platformBrowserDynamic().bootstrapModule(AppModule)
```

Looking at **`app.module.ts`** file we see following things:
* `@NgModule`: This is a decorator. A decorator is a function that modifies Javascript classes. It helps specify details about
app module. This decorator takes metadata to help you describe module.

  * `import` key: It specifies which modules are required by this module to function.
  * `declaration` key: Specifies the view classes that belong to this particular module. View classes can be components, directives and pipes.
  * `provider` key: It tells about the services that this module will make use of.
  
Looking at **`app.component.ts`** file we see following things:
* `@Component` decorator: Which has following props-
  * `selector`: This is tag which will be used in html to refer to this component.
  * `templateUrl`: Points to the template html file for this component.
  * `styleUrls`: This is an array of styling files which will be used by our component.
  
**Note:** It is recommended not to include Bootstrap with angular because some Bootstrap components use jQuery and they can cause conflict with our Angular code.

Install `angular material` as shown below:
```bash
npm install @angular/material@2.0.0-beta.8 --save
npm install @angular/cdk@2.0.0-beta.8 --save
```
Then add following line in `index.html`:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```
**Generate a component using Angular CLI:**
```bash
ng generate component menu
```
This will create a new folder called `menu` and relevant menu files in it. It will modify `app.module.ts` by importing and adding menu component in it.

`*ngFor` is a structural directive used to display items in a list(by looping through the list).
```html
<mat-list-item *ngFor="let dish of dishes">
  <img matListAvatar src={{dish.image}} alt={{dish.name}}>
  <h1 matLine> {{dish.name}} </h1>
  <p matLine>
    <span> {{dish.description}} </span>
  </p>
</mat-list-item>
```
**Angular Direcives**
* Angular templates are dynamic
* Directives give instructions to Angular on how to render the
templates to the DOM
* A directive can be defined in Angular as a class with the @Directive
decorator
* A component is a special kind of directive with a template
associated to it
* Two other kinds of directives in Angular: Structural and Attribute.

**Angular Pipes**
```html
<h1> {{dish.name | uppercase}} </h1>
```
**Note:** The Decorators must come directly before an exported class for example:
```js
@Component({
    ...
})
export class someComponent{}
```
this goes the same for @Pipe @Directive @Injectable and @NgModule
