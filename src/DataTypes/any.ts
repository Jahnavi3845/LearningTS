let str; //on hovering str, type shows as any which as of now any value can be given

function getName() {
  return "Jahnavi";
}

str = getName(); //on hovering str, type shows as any which as of now any value can be given

//Don't use "any" which is a bad practice

let newstr: string;

function getUser(name) {
  //   return `Hey ${name} `;
  return 45;
}

newstr = getUser("Jahnavi");
