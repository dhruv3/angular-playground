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

Looking at `app.module.ts` file we see following things:
* `@NgModule`: This is a decorator. A decorator is a function that modifies Javascript classes. It helps specify details about
app module. This decorator takes metadata to help you describe module.

  * `import` key: It specifies which modules are required by this module to function.
  * `declaration` key: Specifies the view classes that belong to this particular module. View classes can be components, directives and pipes.
  * `provider` key: It tells about the services that this module will make use of.
  
## Angular Material and Angular Flex
