import React from "react";
import { observer, inject } from "mobx-react";

import Row from "./Row";

import "./Table.css";

const Table = inject("store")(
  observer(({ store }) => {
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
  })
);

export default Table;
