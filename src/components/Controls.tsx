import React from "react";
import { inject } from "mobx-react";

import { Store } from "../store/Store";

import "./Controls.css";

interface InjectedProps {
  store: Store;
}

@inject("store")
class Controls extends React.Component<{}> {
  // https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
  get injected() {
    return this.props as InjectedProps;
  }

  addRecord = () => {
    const name = prompt("The name:") || "";
    const salary = prompt("The salary:") || "";
    const salaryToNum = Number(salary);
    this.injected.store.addEmployee({ name, salary: salaryToNum });
  };

  clearTable = () => {
    this.injected.store.clearList();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-container">
              <button
                type="button"
                className="btn btn-outline-dark btn-control"
                onClick={this.clearTable}
              >
                clear&nbsp;table
              </button>
            </div>
          </div>
          <div className="col">
            <div className="btn-container">
              <button
                type="button"
                className="btn btn-outline-dark btn-control"
                onClick={this.addRecord}
              >
                add&nbsp;record
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
