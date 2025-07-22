/*
TypeScript is a programming language built on top of JavaScript that adds static typing.
It helps developers catch errors early during development, write cleaner code, and improve collaboration in large projects.

Catches mistakes before running code
Makes your code easier to read and maintain
Helps with auto-complete, intellisense, and better tooling
Works with all JavaScript code — you can convert gradually
Used widely in large applications (like Angular, VS Code, etc.)

.ts file with Annotation like "let age:number=25 will be converted .js file on runtime, so 
that we can execute .js file in browser as it only runs .js file, this is how Typescript works"

How the TS file is converted to js

const message: string = "Hello, TypeScript!";
console.log(message);

Run command: npx tsc hello.ts

Later compile will remove type and run the plain .js file

const message = "Hello, TypeScript!";
console.log(message);

If we want js file should be ECMA@latest

*/

let message: string = "Hey there";
console.log(message);
