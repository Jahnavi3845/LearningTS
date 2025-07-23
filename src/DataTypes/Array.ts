let arr = [22, "Jahnavi", true]; // works in js

// let arr1: number[] = [22, "Jahnavi"]; //throws error cause once number is set as data
// type to an array, won't accept anyother data type

let arr2: (number | string)[] = [22, 34, 5, 8];
/*the below is showing error becoz, once the array is declared with some data type,
u can't add another data type element dynamically
*/
// arr2.push("J");
let j;
arr2.forEach((ele, index) => {
  if (typeof ele === "string") {
    ele = ele + "22";
  }
});

console.log(arr2);

let arr3 = [22, 34, 45];
console.log(arr3[3]);
