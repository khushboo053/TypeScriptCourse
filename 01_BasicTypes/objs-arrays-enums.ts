// const person: {
//   name: string;
//   age: number;
// } = {

/*
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "emily",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "emily",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  //   role: "READ ONLY USER",
  //   role: ADMIN,
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, 'admin'];
// person.role = [0, 'admin', 'user']

let favActivities: string[];
favActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map());  // error: map will be availabe on arrays but not on strings
}

// if (person.role === "READ-ONLY-USER") {
//   console.log("Is Read Only!");
// }

// if (person.role === ADMIN) {
//   console.log("is admin");
// }

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
