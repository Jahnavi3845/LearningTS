function addTwoNum(num1: number, num2: number) {
  return num1 + num2;
}
addTwoNum(8, 5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("Hey");

let signUpUser = (
  name: string,
  age: number,
  isEmployeed: boolean,
  address: object
) => {
  let obj: object;
  obj = {
    name: name,
    age: age,
    isEmployeed: isEmployeed,
    address: address,
  };
  return obj;
};
let newUser = signUpUser("Jahnavi", 23, true, {
  hNo: 101,
  street: "23 gydyg",
  city: "kurnool",
});

console.log(newUser);

function loginUser(
  name: string,
  age: number,
  isEmployeed: boolean,
  address: object = {
    hNo: 101,
    street: "23 gydyg",
    city: "kurnool",
  }
) {
  let obj: object;
  obj = {
    name: name,
    age: age,
    isEmployeed: isEmployeed,
    address: address,
  };
  return obj;
}
let newUser1 = loginUser("Jahnavi", 23, true);

console.log(newUser1);

////adding return type explicitly

//never we use when the function should exit abnormally w/o returning any value
let x: number;

function setValue(): never {
  x = 70;
  throw new Error("this function will never return a value");
}

function tryNever() {
  try {
    throw new Error("Forcing error");
  } catch {
    setValue();
  }
}
tryNever();
