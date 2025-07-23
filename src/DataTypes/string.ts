let str1: string;
str1 = "Hello";
// str1 = 123; //Error - Type 'number' is not assignable to type 'string'

let str2 = "World";
// str2 = true; //Error - Type 'boolean' is not assignable to type 'string'

let objStr: { name: string } = {
  name: "Jahnavi",
};
// objStr.name = 123; //Error - Type 'number' is not assignable to type 'string'
