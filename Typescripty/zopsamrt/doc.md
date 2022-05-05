
<!-- static types means -->
explicitly declared and thus are determined at compile time.

TypeScript:
TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
Software that converts the source code of one language into the source code of another




** Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit
In both examples below firstName is of type string

Explict Type
Explicit - writing out the type:

let firstName: string = "Dylan";
Explicit type assignment are easier to read and more intentional.

Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstName = "Dylan";
