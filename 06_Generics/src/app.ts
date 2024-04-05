/*
const names: Array<string> = [];
names[0].split(" ");

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
*/

/*
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB)
}
console.log(merge({ name: 'Emily'}, {age: 20}}));
*/

// T MEANS ITS OF ANY TYPE BUT LIKELY TO BE DIFFERENT FROM  ONE ANOTHER
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Emily", hobbies: ["Sports"] },
//   { age: 25 }
// );

const mergeObj = merge({ name: "Emily", hobbies: ["Sports"] }, { age: 25 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value!";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got element ${element.length} elements.`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports, Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Emily" }, "name");

// UNION TYPES
/*
class DataStorage {
  private data: string[] | number[] | boolean[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
*/

// GENERIC CLASSES
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Manu");
textStorage.addItem("Gabriel");
textStorage.removeItem("Gabriel");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const emObj = {name: 'Emily'}
// objStorage.addItem(emObj);
// objStorage.addItem({ age: 25 });
// objStorage.removeItem(emObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop()
