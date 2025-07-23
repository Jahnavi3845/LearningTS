let isLoggedIn: boolean;
isLoggedIn = true;
// isLoggedIn = "yes"; //Error - Type 'string' is not assignable to type 'boolean'

let isComplete = false;
// isComplete = "false"; //Error - Type 'string' is not assignable to type 'boolean'

let objBool: { isActive: boolean } = {
  isActive: true,
};
// objBool.isActive = "true"; //Error - string not assignable to boolean
