import React from 'react';

const contact = [
    {
      name: "Ayush Khade",
      phone: "1234567890",
      email: "ayush.khade@somaiya.edu",
    },
    {
      name: "Kaushik Metha",
      phone: "1234567890",
      email: "kaushik.metha@somaiya.edu",
    },
    {
      name: "Saurabh Nambiar",
      phone: "1234567890",
      email: "saurabh.nambiar@somaiya.edu",    },
  ];
  
  const TableRow = ({ row }) => (
    <tr>
      <td key={row.name}>{row.name}</td>
      <td key={row.phone}>{row.phone}</td>
      <td key={row.email}>{row.email}</td>
    </tr>
  );
  
  const Table = ({ data }) => (
    <table className="table">
      <tr>
        <th>Name</th>
        <th>Phone number</th>
        <th>Email id</th>
      </tr>
      {data.map((row) => {
        return <TableRow row={row} />;
      })}
    </table>
  );
  
  class Contact extends React.Component {
    render() {
      return <Table data={contact} />;
    }
  }

export default Contact;