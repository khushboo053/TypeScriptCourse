function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  // throw new Error('Incorrect Input!');
  //   }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// let number1:number
// number1 = 5
const number1 = 5;
const number2 = 3.4;
const printResult = true;
let resPhrase = "Result is: ";

add(number1, number2, printResult, resPhrase);