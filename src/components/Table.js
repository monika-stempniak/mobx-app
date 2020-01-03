import React, { Component } from "react";
import { observer } from "mobx-react";

import Row from "./Row";

import "./Table.css";

export default class Table extends Component {
  render() {
    return (
      <table className="app-table my-5" border="1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name:</th>
            <th scope="col">Daily salary:</th>
          </tr>
        </thead>
        <tbody>
          {this.props.store.employeesList.map((employee, index) => (
            <Row key={index} id={index} data={employee} />
          ))}
        </tbody>
      </table>
    );
  }
}

Table = observer(Table);
