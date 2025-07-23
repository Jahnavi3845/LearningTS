let newmyobj: { name: string; age: number } = {
  name: "Jan",
  age: 25,
};

// alias type

type newobjproptype = {
  name: string;
  age: number;
  isEmployeed: boolean;
  address: object;
};

let newmyobj1: newobjproptype = {
  name: "Jan",
  age: 25,
  isEmployeed: true,
  address: {
    street: "soene",
    dist: "kurnool",
  },
};
//this is not acceptable in objects, but in functions it is acceptable
let newobjwithlessparams = {
  name: "jan",
  age: 24,
  isEmployeed: false,
  address: {},
};
let newObj1: objproptype = newobjwithlessparams;

function createUser(): objproptype {
  return newobjwithlessparams;
}
