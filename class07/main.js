console.log("Hi! I'm running!");

let var1 = 1;
let var2 = "ok";

let firstName = "John";
let lastName = "Doe";

function fullName(fName, lName) {
  return fName + " " + lName;
}

let johnDoe = fullName(fullName, lastName);

console.log(johnDoe);

console.log(fullName("Peter", "Ng"));
