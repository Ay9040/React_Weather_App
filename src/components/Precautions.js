import React from "react";


class Precautions extends React.Component {
  render() {
    document.getElementById("root").className="default";
    return(
      <div className="precautions_body">
        <div className="weather_card">
          <h2 className="card_name prec_rainy">Rainy</h2>
          <p className="para_rain">Carry an Umbrella<br></br>Wear a raincoat</p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_clear">Clear</h2>
          <p className="para_clear">Carry an Umbrella<br></br>water bottle</p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_snowy">Snowy</h2>
          <p className="para_snow">Wear warm clothes</p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_atmospheric">Atmospheric</h2>
          <p className="para_atmo">Wear a mask</p>
        </div>
      </div>
    )
  }
}

export default Precautions;
