/*
interface Admin {
  name: string;
  priviledges: string[];
};

interface Employee {
  name: string;
  startDate: Date;
};
*/

// interface ElevatedEmployee extends Employee, Admin {}

type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Emily",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// INTERSECTION
type Universal = Combinable & Numeric;

// FUNCTION OVERLOADS
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Emily", "Gabriel");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Emm",
  // job: { title: "CEO", description: "My own company" },
};

// OPTIONAL CHAINING
// console.log(fetchedUserData?.job?.title);

// const uInput = "";
// const storedData = uInput || "DEFAULT";

// NULLISH COERCING
const uInput = undefined;
const storedData = uInput ?? "DEFAULT";

console.log(storedData);

// UNION
type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
  console.log(`EmpName: ${emp.name}`);

  if ("priviledges" in emp) {
    console.log(`Priviledges: ${emp.priviledges}`);
  }

  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmpInfo(e1);
printEmpInfo({ name: "Gabriel", startDate: new Date() });

class Car {
  drive() {
    console.log("Car driving...");
  }
}

class Truck {
  drive() {
    console.log("Car driving...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// IF WORKING WITH INTERFACES, THEN WE CAN'T USE INSTANCEOF
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  // vehicle.loadCargo(500);       //  Error, method not exists on Car instance
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ('flyingSpeed' in animal) {
  //   console.log(`Moving with speed: ${animal.flyingSpeed}`);
  // }

  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 80 });

// const userInput = <HTMLInputElement>document.getElementById("user-input");

// const userInput = document.getElementById("user-input")! as HTMLInputElement;
// userInput.value = 'Hii..'

const userInput = document.getElementById("user-input") as HTMLInputElement;

if (userInput) {
  (userInput as HTMLInputElement).value = "Hii....there";
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
