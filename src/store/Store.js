import { decorate, observable, action, computed } from "mobx";

class Store {
  employeesList = [
    { name: "John Doe", salary: 150 },
    { name: "Richard Roe", salary: 225 }
  ];

  clearList() {
    this.employeesList = [];
  }

  addEmployee(employee) {
    this.employeesList.push(employee);
    console.log(this.employeesList);
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
  clearList: action,
  addEmployee: action,
  totalSalary: computed,
  highEarnersCount: computed
});

export const appStore = new Store();
