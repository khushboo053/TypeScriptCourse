let userInput: unknown;
let userName: string;

userInput = 8;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  //   throw { message: message, errorCode: code };
  while(true) {}
}

generateError("An error occurred!", 500);
