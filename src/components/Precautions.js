import React from "react";
import "../styles/precautions.css"

const precautions = [
  {
    condition: "Clear Sky",
    premeasure: "No precautions",
  },
  {
    condition: "Raining",
    premeasure: "Umbrella",
  },
  {
    condition: "Winter",
    premeasure: "Warm Clothes",
  },
];

const TableRow = ({ row }) => (
  <tr>
    <td key={row.condition}>{row.condition}</td>
    <td key={row.premeasure}>{row.premeasure}</td>
  </tr>
);

const Table = ({ data }) => (
  <table className="table">
    <tr>
      <th>Weather Conditions</th>
      <th>Precautionary Measures</th>
    </tr>
    {data.map((row) => {
      return <TableRow row={row} />;
    })}
  </table>
);

class Precautions extends React.Component {
  render() {
    return <Table data={precautions} />;
  }
}

export default Precautions;
