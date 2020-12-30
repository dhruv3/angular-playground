# Section 2: Understanding Angular Template Syntax
* Password Generator App
* Different type of files and their use:
<img width="788" alt="Screen Shot 2020-09-19 at 12 01 50 PM" src="https://user-images.githubusercontent.com/13077629/93672407-39218280-fa70-11ea-8728-e19815049f32.png">

* Event Binding Syntax:
<img width="691" alt="EventBindingSyntax" src="https://user-images.githubusercontent.com/13077629/93673036-c9f85e00-fa70-11ea-9f31-bf8b6e161470.png">

```js
export class AppComponent{
  pwd = ''
}

///same as this-
export class AppComponent{
  constructor(){
    this.pwd = ''
  }
}
```
* Property Binding Syntax: **EVALUATED AS CODE**
<img width="673" alt="PropBindingSyntax" src="https://user-images.githubusercontent.com/13077629/93685608-23af5700-fa76-11ea-8284-c8d3e92807ba.png">

* JS vs Angular: In vanilla JS you wait for user to do an action and then you go read DOM values to do calculation. In Angular you go and get info while the user actions are going on. For example:
<img width="826" alt="Screen Shot 2020-09-19 at 12 53 45 PM" src="https://user-images.githubusercontent.com/13077629/93685778-5ad23800-fa77-11ea-8911-229fcbe3cdc3.png">

* Types of JS events on elements: `change`, `input`
* The events have a `$event` as a parameter. `isNaN`: Is Not a Number function.
* Keyword Diagram:
<img width="1288" alt="KeywordsNotes" src="https://user-images.githubusercontent.com/13077629/93686391-848d5e00-fa7b-11ea-92dd-373a25199391.png">

# Section 3: Building Components
* Angular Server initial working:
<img width="710" alt="angularWorks1" src="https://user-images.githubusercontent.com/13077629/93693676-99441300-fac8-11ea-89a2-09ec68734f92.png">

* App Bootup Process:
<img width="450" alt="AppBootUpProcess" src="https://user-images.githubusercontent.com/13077629/93693686-af51d380-fac8-11ea-9b94-4472b7d0e306.png">

* Communicate from parent to child component:
<img width="641" alt="ParentToChild" src="https://user-images.githubusercontent.com/13077629/93693798-32bff480-faca-11ea-8332-6081166ab6b9.png">

**Parent Component**
```html
<app-card
    *ngFor="let post of posts"
    [title]="post.title"
    [imageUrl]="post.imageUrl"
    [username]="post.username"
    [content]="post.content"
></app-card>
```
**Child Component**
```js
export class CardComponent implements OnInit {
  @Input() title = "";
  @Input() imageUrl = "";
  @Input() content = "";
  @Input() username = "";
  constructor() { }
  ngOnInit(): void {
  }
}
```
# Section 4: Exercise
* Typing Challenge app
# Section 5: Mastering Pipes
* Pipes overview:
<img width="996" alt="pipes" src="https://user-images.githubusercontent.com/13077629/93719638-86bdee00-fb49-11ea-8c8b-54a850a8fc1c.png">

# Section 6: Directives
* Overview:
<img width="592" alt="directives" src="https://user-images.githubusercontent.com/13077629/94347489-4ef7f000-fffa-11ea-9a81-03af325fbba5.png">

* Types of directives:
  * Structural: ngFor, ngIf
  * Property: ngClass
  ```html
  <li class="page-item" [ngClass]="{ disabled: currentPage === 0 }">
  ```
* One HTML element can have AT MOST one structural directive attached to it.
* More types of directives: `[ngSwtich]`, `*ngSwitchCase` and `*ngSwitchDefault`
* Generate new directives:
  ```
  ng g d class
  ```

* Get access to the element in your directive using `ElementRef`. The DOM element is present in `nativeElement`.
```js
constructor(private element:ElementRef) {
  this.element.nativeElement.style.backgroundColor = 'red';
}
```
* Getting props from elem to your directive you need to use `Input` Decorators(what was used for Parent-Child comms as well).
* **Intercepting a Prop Assignment:** Also no need to declare `backgroundColor` as a class property
```html
//in template html
<h4 appClass [backgroundColor]="'red'">{{ images[currentPage].title }}</h4>
```

```js
//in directive file
@Input() set backgroundColor(color: string){
  this.element.nativeElement.style.backgroundColor = color;
}
```
* **Input Aliasing**: Now no need to mention directive and prop separately.
```html
//in template html
<h4 [appClass]="'red'">{{ images[currentPage].title }}</h4>
```

```js
//in directive file
@Input('appClass') set backgroundColor(color: string){
  this.element.nativeElement.style.backgroundColor = color;
}
```
* Angular props: `ViewContainerRef`, `TemplateRef`
  * ViewContainerRef: It is custom version of our element on which our directive is applied and you can do stuff to the content inside it(like the children DOM).
  * TemplateRef: References all the elements inside our container element(on which directive is applied to).

# Section 7: Module System
* Types of modules:
<img width="673" alt="Screen Shot 2020-09-26 at 9 41 04 PM" src="https://user-images.githubusercontent.com/13077629/94354506-4bd42280-0041-11eb-97b2-69db966bdebd.png">

* Creating a module:
<img width="686" alt="Screen Shot 2020-09-26 at 9 42 54 PM" src="https://user-images.githubusercontent.com/13077629/94354520-6c03e180-0041-11eb-918b-41ab342fda34.png">

* **Export** the comps and then **import** them in the files you want to use them.

* `NgModule` decorator and what the props mean:
<img width="721" alt="Screen Shot 2020-09-26 at 10 05 21 PM" src="https://user-images.githubusercontent.com/13077629/94354811-9a36f080-0044-11eb-8aa4-259b2cb2b347.png">

# Section 8: Routing and Navigation
<img width="735" alt="Screen Shot 2020-12-28 at 11 38 40 PM" src="https://user-images.githubusercontent.com/13077629/103261195-359e7100-4966-11eb-88a6-71cf3e33c6dc.png">

* App module imports entire `Elements` module and when it does that it also gets the routing module present in `Elements`.

<img width="711" alt="Screen Shot 2020-12-28 at 11 44 50 PM" src="https://user-images.githubusercontent.com/13077629/103261322-bcebe480-4966-11eb-84b1-b7fa78cca80a.png">


* Angular finds whatever elements matches the path in the URL and displays it in place of `router-outlet` HTML element.
* `routerLink` it talks directly to our `router` in Angular and prevents complete refresh of the page. So use `routerLink` instead of `href` wheerever possible.
* `routerLinkActive` applies whatever class you mentioned(active in our case) whenever our route is selected.
```js
<a routerLink="/elements" routerLinkActive="active" class="item">Elements</a>
```
* **NOTE:** Not all components need to be a part of some module
* **Reordering Routing Rules:** As soon as Angular finds first matching route it returns and stops looking further. So MOVE the APPROUTING module at the end in your app module file.

# Section 9: Lazy Loading with Modules
<img width="660" alt="Screen Shot 2020-12-29 at 12 54 31 PM" src="https://user-images.githubusercontent.com/13077629/103307184-1854bb80-49d5-11eb-9cb2-959870789760.png">

* Make change in App Module import. Add `loadChildren` in AppRouting. Update `routes` in your Routed Module.

<img width="682" alt="Screen Shot 2020-12-29 at 1 01 00 PM" src="https://user-images.githubusercontent.com/13077629/103307546-f1e35000-49d5-11eb-8bdc-f8271529d512.png">

* Shared Modules will have components that are sharable across different modules

* `ng-content`:
<img width="775" alt="Screen Shot 2020-12-29 at 2 23 40 PM" src="https://user-images.githubusercontent.com/13077629/103312039-81dac700-49e1-11eb-8762-734fd698724f.png">

* `ng-content` with `select="header"` or you can use class name too `select=".icon-header"`. Tells Angular look for tag named as `header` and take its content:
<img width="513" alt="Screen Shot 2020-12-29 at 2 30 10 PM" src="https://user-images.githubusercontent.com/13077629/103312400-83f15580-49e2-11eb-9ab3-6398e5ada6bd.png">

# Section 10: Adv Comp Routing
<img width="654" alt="Screen Shot 2020-12-29 at 9 29 45 PM" src="https://user-images.githubusercontent.com/13077629/103328093-0e56ab00-4a1d-11eb-984d-068983d286c7.png">

* Relative Routing: RouterLink
<img width="829" alt="Screen Shot 2020-12-29 at 9 38 47 PM" src="https://user-images.githubusercontent.com/13077629/103328358-414d6e80-4a1e-11eb-94f5-cbb2a859bdf8.png">

* To match the path exactly we need to do as follows:
```js
[routerLinkActiveOptions]='{exact: true}'
```
