import _ from "lodash";

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);




// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Use lodash to calculate the sum of the numbers
const totalSum: number = _.sum(numbers);

// Output the result
console.log(totalSum); // Output: 15
