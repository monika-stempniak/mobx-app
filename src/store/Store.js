import {
  decorate,
  observable,
  action,
  computed,
  autorun,
  when,
  reaction,
  toJS,
  flow
} from "mobx";

class Store {
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

  employeesList = [];
  state = "pending"; // "pending" / "done" / "error"

  fetchInitialEmployees = flow(function*() {
    try {
      const response = yield fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = yield response.json();
      const employees = data.map(e =>
        Object.assign(e, { salary: Math.round(Math.random() * 1000) })
      );
      this.state = "done";
      this.employeesList = employees;
    } catch (error) {
      this.state = "error";
    }
  });

  printWarning() {
    console.log("Total salary is more than 500");
  }

  clearList() {
    this.employeesList = [];
  }

  addEmployee(employee) {
    this.employeesList.push(employee);
  }

  get totalSalary() {
    let sum = 0;
    this.employeesList.map(e => (sum += e.salary));
    return sum;
  }

  get highEarnersCount() {
    return this.employeesList.filter(e => e.salary > 500).length;
  }
}

decorate(Store, {
  employeesList: observable,
  state: observable,
  clearList: action,
  addEmployee: action,
  totalSalary: computed,
  highEarnersCount: computed
});

export const appStore = new Store();
