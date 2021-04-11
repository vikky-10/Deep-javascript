# lets begun the discussion.............. 🔥

- npm install -g @angular/cli
- ng stand for angular
- ng new <project name>
- ng server //for run the application
- Hot module Replacements(HMR)/ webpack tool whene we compile the application it automatically

* What are Decorators??
  🔴 Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original source code. In AngularJS, decorators are functions that allow a service, directive or filter to be modified prior to its usage.

🔴 Decorator ❓
A decorator is simply a function that modifies definition of a class or properties inside a class. These decorators are also called as annotations and are mainly classified as two types — class decorator, and class field decorator.

Class Decorator
A decorator that appears immediately before a class definition.
For instance, @Component() decorator which is mentioned right before a class definition, has metadata that helps Angular to know how those classes or properties should work.
@Component({
selector: ‘app-root’,
templateUrl: ‘./app.component.html’,
styleUrls: [‘./app.component.css’]
})
export class AppComponent {
title = ‘app’;
}

Decorators are a feature of typeScript and ar implimented as function. the name of the decorator starts with @ symbol following by brackets and arguments since decorators are just function in typescript.
Decorators are simply function that return functions. these functions supply metadata to angular about a particular class property, value , or method
Decorators are run at runtime.
Decorators allow you to exicute function for example @Component executes the component function imported from angular 7.
