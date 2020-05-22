import React from 'react';

/* const contact = [
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
  ); */
  
  class Contact extends React.Component {
    render() {
      return (<div class='info'>
        <div class='card'>
          <i class="card-icon fa fa-envelope"></i>
          <p>ayush.khade@somaiya.edu<br/>kaushik.metha@somaiya.edu<br/>saurabh.nambiar@somaiya.edu</p>
        </div>
        <div class='card'>
              <i class="card-icon fa fa-phone"></i>
              <p>8104632457<br/>8104632457<br/>8104632457</p>
        </div>
        <div class='card'>
          <i class="card-icon fa fa-location-arrow"></i>
          <p>K.J.S.C.E, Vidyavihar</p>
        </div>
    </div>);
    }
  }

export default Contact;