import React from "react";
import { inject } from "mobx-react";

import "./Controls.css";

const Controls = inject("store")(({ store }) => {
  const addRecord = () => {
    const name = prompt("The name:");
    const salary = prompt("The salary:");
    const salaryToNum = Number(salary);
    store.addEmployee({ name, salary: salaryToNum });
  };

  const clearTable = () => {
    store.clearList();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-outline-dark btn-control"
              onClick={clearTable}
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
              onClick={addRecord}
            >
              add&nbsp;record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Controls;
