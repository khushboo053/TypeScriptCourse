// const userName = "Emily";
// userName = 'Max'     // ERROR!
// let age = 25;
// age = 30;
// let result;

// function add(a: number, b: number) {
//   //   var result;
//   // let result
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   var isOld = true;
//   // let isOld = true
// }

// console.log(isOld);

// DEFAULT ARGS SHOULD ALWAYS  BE AT THE END OF A FUNCTION DEF
/*
const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(2));
*/

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Travelling"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName: "EMily",
  age: 25,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  // const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(1, 5, 6);
console.log(addedNumbers);

// DESTRUCTURING DOES'NT CHANGE ORIGINAL ARRAY

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const { firstName: userName, age } = person;
// console.log(userName, age, firstName);
console.log(userName, age, person);
