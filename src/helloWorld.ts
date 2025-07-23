/*
TypeScript is a programming language built on top of JavaScript that adds static typing.
It helps developers catch errors early during development, write cleaner code, and improve collaboration in large projects.

Catches mistakes before running code
Makes your code easier to read and maintain
Helps with auto-complete, intellisense, and better tooling
Works with all JavaScript code — you can convert gradually
Used widely in large applications (like Angular, VS Code, etc.)

Typescript is something which allows coder to write code in more precise way to avoid runtime errors

Typescript is all about type safety and static checking that means while writing code the parser
or the IDE's constantly watching the lines where as this will not be there in js

.ts file with Annotation like "let age:number=25 will be converted .js file on runtime, so 
that we can execute .js file in browser as it only runs .js file, this is how Typescript works"

How the TS file is converted to js

const message: string = "Hello, TypeScript!";
console.log(message);

Run command: npx tsc hello.ts

Later compile will remove type and run the plain .js file

const message = "Hello, TypeScript!";
console.log(message);

Installation of Ts:
Prerequisites:
Require node and npm
Later to globally install npm install -g typescript
For project instance>>npm install typescript --save --dev

T check version of typescript>> tsc -v

To directly run TS file and internally that converts to js file, 
need to install following: npm install --save-dev ts-node typescript
and command : npx ts-node "filename"

*/

let message: string = "Hey there";
console.log(message);
