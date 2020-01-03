import React from "react";

import { Employee } from "../store/Store";

import "./Row.css";

interface RowProps {
  id: number;
  data: Employee;
}

const Row: React.FC<RowProps> = ({ id, data }) => {
  const { name, salary } = data;

  return (
    <tr>
      <th scope="row">{id + 1}</th>
      <td>{name}</td>
      <td className="price">{salary}$</td>
    </tr>
  );
};

export default Row;
