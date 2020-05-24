import React from 'react';

  
  class Contact extends React.Component {
    render() {
      document.getElementById("root").className="default";

      return (<div class='info'>
        <div class='card'>
          <i class="card-icon fa fa-envelope"></i>
          <p>ayush.khade@somaiya.edu<br/>kaushik.metha@somaiya.edu<br/>saurabh.nambiar@somaiya.edu</p>
        </div>
        <div class='card'>
              <i class="card-icon fa fa-phone"></i>
              <p>9876053214<br/>8104632457<br/>7987239069</p>
        </div>
        <div class='card'>
          <i class="card-icon fa fa-location-arrow"></i>
          <p>K.J.S.C.E, Vidyavihar</p>
        </div>
    </div>);
    }
  }

export default Contact;