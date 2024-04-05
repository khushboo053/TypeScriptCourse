abstract class Department {
  //   private readonly id: string;
  //   private name: string;
  //   private employees: string[] = [];
  protected employees: string[] = [];

  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear);   // STATIC PROPERTY IS NOT AVAILABLE ON INSTANCE
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //   describe(this: Department) {
  //     console.log(`Department: (${this.id}): ${this.name}`);
  //   }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = k3;
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDept extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department: ID- ${this.id}`);
  }
}

class AccountingDept extends Department {
  private lastReport: string;
  private static instance: AccountingDept;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDept.instance) {
      return this.instance;
    }
    this.instance = new AccountingDept("k3", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Emily") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const emp1 = Department.createEmployee("Em");
console.log(emp1, Department.fiscalYear);

const it = new ITDept("k2", ["Max"]);
it.addEmployee("Emily");
it.addEmployee("Gabriel");

// it.employees[2] = "Manu";

it.describe(); // Outputs: Department: Accounting
it.name = "NEW NAME";
it.printEmployeeInfo();

// const accounting = new AccountingDept("k1", []);
const accounting = AccountingDept.getInstance();
const accounting2 = AccountingDept.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = "Year end report";

accounting.addReport("Something went wrong");
console.log(accounting.mostRecentReport); // Outputs: Max
// accounting.printReports();

accounting.addEmployee("Manu");
// accounting.printEmployeeInfo();
accounting.describe();
