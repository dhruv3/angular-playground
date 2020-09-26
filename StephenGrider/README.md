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
