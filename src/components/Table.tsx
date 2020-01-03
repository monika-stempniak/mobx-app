import React from "react";
import { observer, inject } from "mobx-react";

import { Store } from "../store/Store";
import Row from "./Row";

import "./Table.css";

interface TableProps {}

interface InjectedProps {
  store: Store;
}

@inject("store")
@observer
class Table extends React.Component<TableProps> {
  // https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const { store } = this.injected;

    return (
      <table className="app-table my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name:</th>
            <th scope="col">Daily salary:</th>
          </tr>
        </thead>
        <tbody>
          {store.employeesList.map((employee, index) => (
            <Row key={index} id={index} data={employee} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="col" className="footer-cell"></th>
            <td className="total-cell">TOTAL:</td>
            <td className="total-cell">{store.totalSalary}$</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Table;
