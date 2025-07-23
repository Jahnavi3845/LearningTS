let myobj: { name: string; age: number } = {
  name: "Jan",
  age: 25,
};

// alias type

type objproptype = {
  name: string;
  age: number;
  isEmployeed: boolean;
  address: object;
};

let myobj1: objproptype = {
  name: "Jan",
  age: 25,
  isEmployeed: true,
  address: {
    street: "soene",
    dist: "kurnool",
  },
};
let objwithlessparams = { name: "jan", age: 24 };
let newObj: objproptype = objwithlessparams;
