import {
  observable,
  action,
  computed,
  autorun,
  when,
  reaction,
  toJS,
  runInAction
} from "mobx";

export interface Employee {
  name: string;
  salary: number;
}

export class Store {
  constructor() {
    // initial reaction
    // autorun reacts to just everything that is used in its function
    autorun(async reaction => {
      await this.fetchInitialEmployees();
      console.log("Initial number of employees: ", this.employeesList.length);
      console.log(toJS(this.employeesList)); // toJS creates a deep clone, and thus will read the message
      reaction.dispose();
    });

    when(
      // once...
      () => this.totalSalary > 500,
      // ... then
      () => this.printWarning()
    );

    // correct use of reaction: reacts to length and name changes
    reaction(
      () => this.employeesList.map(e => e.name),
      (names, reaction) => {
        console.log("reaction:", names.join(", "));
        reaction.dispose();
      }
    );
  }

  @observable employeesList: Array<Employee> = [];
  @observable state: string = "pending"; // "pending" / "done" / "error"

  @action.bound
  async fetchInitialEmployees() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const employees = data.map((e: Employee) => ({
        name: e.name,
        salary: Math.round(Math.random() * 1000)
      }));
      runInAction(() => {
        this.state = "done";
        this.employeesList = employees;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }

  printWarning() {
    console.log("Total salary is more than 500");
  }

  @action.bound
  clearList() {
    this.employeesList = [];
  }

  @action.bound
  addEmployee(employee: Employee) {
    this.employeesList.push(employee);
  }

  @computed
  get totalSalary() {
    let sum = 0;
    this.employeesList.map(e => (sum += e.salary));
    return sum;
  }

  @computed
  get highEarnersCount() {
    return this.employeesList.filter(e => e.salary > 500).length;
  }
}
