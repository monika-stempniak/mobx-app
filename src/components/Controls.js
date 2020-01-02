import React, { Component } from "react";

import "./Controls.css";

export default class Controls extends Component {
  addRecord = () => {
    const name = prompt("The name:");
    const salary = prompt("The salary:");
    console.log(name, salary);
  };

  clearTable = () => {
    console.log("clear list...");
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
