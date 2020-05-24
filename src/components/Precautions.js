import React from "react";


class Precautions extends React.Component {
  render() {
    document.getElementById("root").className="default";
    return(
      <div className="precautions_body">
        <div className="weather_card">
          <h2 className="card_name prec_rainy">Rainy</h2>
          <p className="para_rain"><ul><li>Carry an Umbrella</li><li>Wear a raincoat</li></ul></p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_clear">Clear</h2>
          <p className="para_clear"><ul><li>Carry an Umbrella</li><li>water bottle</li></ul></p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_snowy">Snowy</h2>
          <p className="para_snow"><ul><li>Wear warm clothes</li></ul></p>
        </div>
        <div className="weather_card">
          <h2 className="card_name prec_atmospheric">Fog/Mist</h2>
          <p className="para_atmo"><ul><li>Wear a mask</li></ul></p>
        </div>
      </div>
    )
  }
}

export default Precautions;
