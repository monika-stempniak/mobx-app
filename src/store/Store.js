import { decorate, observable, action } from "mobx";

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
  }
}

decorate(Store, {
  employeesList: observable,
  clearList: action,
  addEmployee: action
});

export const appStore = new Store();
