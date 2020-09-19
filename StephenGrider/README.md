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
* Property Binding Syntax:
<img width="673" alt="PropBindingSyntax" src="https://user-images.githubusercontent.com/13077629/93685608-23af5700-fa76-11ea-8284-c8d3e92807ba.png">

* JS vs Angular: In vanilla JS you wait for user to do an action and then you go read DOM values to do calculation. In Angular you go and get info while the user actions are going on. For example:
<img width="826" alt="Screen Shot 2020-09-19 at 12 53 45 PM" src="https://user-images.githubusercontent.com/13077629/93685778-5ad23800-fa77-11ea-8911-229fcbe3cdc3.png">

* Types of JS events on elements: `change`, `input`
* The events have a `$event` as a parameter. `isNaN`: Is Not a Number function.
* Keyword Diagram:
<img width="1288" alt="KeywordsNotes" src="https://user-images.githubusercontent.com/13077629/93686391-848d5e00-fa7b-11ea-92dd-373a25199391.png">

