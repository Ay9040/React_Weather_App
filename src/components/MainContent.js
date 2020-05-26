import React from "react";
import Forecast from "./Forecast"
import ReactDOM from "react-dom"
import "../styles/style.css"

var cityId = 1254661;

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      lat: null,
      lon: null,
      units: this.props.units,
    };

    this.getWeather = this.getWeather.bind(this);
    this.getWeatheratCity = this.getWeatheratCity.bind(this);
    this.displayForecast = this.displayForecast.bind(this);
    this.changeUnits = this.changeUnits.bind(this);
    this.getWeatherById = this.getWeatherById.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
        //this.getTime();
      });
    }
  }

  getWeather(lat, lon) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=c1547e16f89f47b9711cb39aa31ce3a9"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cityId: data["id"],
          icon: data['weather'][0]['icon'],
          Temperature: data["main"]["temp"],
          desc: data["weather"][0]["description"],
          main_desc: data["weather"][0]["main"],
          minTemp: data["main"]["temp_min"],
          maxTemp: data["main"]["temp_max"],
          humidity: data["main"]["humidity"],
          name: data["name"],
          lat: data['coord']['lat'],
          lon: data['coord']['lon'],
          country: data["sys"]["country"],
          units: 'metric',
        });
        cityId = data['id'];
      })
      .catch(console.log);
  }

  getWeatheratCity() {
    var city = document.getElementById("userinput").value;
    var units = this.state.units
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units="+ units +"&appid=c1547e16f89f47b9711cb39aa31ce3a9"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          cityId: data["id"],
          icon: data['weather'][0]['icon'],
          Temperature: data["main"]["temp"],
          desc: data["weather"][0]["description"],
          main_desc: data["weather"][0]["main"],
          minTemp: data["main"]["temp_min"],
          maxTemp: data["main"]["temp_max"],
          humidity: data["main"]["humidity"],
          name: data["name"],
          lat: data['coord']['lat'],
          lon: data['coord']['lon'],
          country: data["sys"]["country"],
          units: units,
        }));
        cityId = data['id'];
      }
      ).catch(console.log);
    this.render();
    //this.getTime();
  }

  getWeatherById(units) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=" +
      cityId + "&units=" + units + "&appid=c1547e16f89f47b9711cb39aa31ce3a9"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          cityId: data["id"],
          icon: data['weather'][0]['icon'],
          Temperature: data["main"]["temp"],
          desc: data["weather"][0]["description"],
          main_desc: data["weather"][0]["main"],
          minTemp: data["main"]["temp_min"],
          maxTemp: data["main"]["temp_max"],
          humidity: data["main"]["humidity"],
          name: data["name"],
          lat: data['coord']['lat'],
          lon: data['coord']['lon'],
          country: data["sys"]["country"],
          units: units,
        }));
      })
      .catch(console.log);
    this.render();
    //this.getTime();
  }

  displayForecast() {
    ReactDOM.render(< Forecast units={this.state.units} city={this.state.cityId}/>, document.getElementById("root"))
  }

  changeUnits() {
    if (this.state.units === 'metric') {
      this.setState((prevState) => ({
        weatherData: null,
        lat: prevState.lat,
        lon: prevState.lon,
        units: 'imperial',
      }))
      this.getWeatherById('imperial')
    }
    else {
      this.setState((prevState) => ({
        weatherData: null,
        lat: prevState.lat,
        lon: prevState.lon,
        units: 'metric',
      }))
      this.getWeatherById('metric')
    }
  }

  getTime() {
    fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=E05R94DP210Z&format=json&by=position&lat="
          + this.state.lat + "&lng=" + this.state.lon)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          date: data['formatted'],
        });
      });
  }

  render() {
    this.getTime()
    var date = new Date(this.state.date)

    switch (this.state.main_desc) {
      case "Thunderstorm":
        document.getElementById("root").className = "thunderstorm";
        break;
      case "Drizzle":
        document.getElementById("root").className = "drizzle";
        break;
      case "Rain":
        document.getElementById("root").className = 'rain';
          break;
      case "Snow":
        document.getElementById("root").className = 'snow';
        break;
      case "Atmosphere":
        document.getElementById("root").className = 'atmosphere';
        break;
      case "Haze":
        document.getElementById("root").className = 'haze';
        break;
      case "Mist":
        document.getElementById("root").className = 'mist';
        break;
      case "Dust":
        document.getElementById("root").className = 'dust';
        break;      
      case "Clear":
        document.getElementById("root").className = 'clear';
        break;
      case "Clouds":
        document.getElementById("root").className = 'clouds';
        break;
      case "Fog":
        document.getElementById("root").className = 'fog';  
      default:
        document.getElementById('root').className = 'default';
        break;
    }
    return (
      
      <div align="center" className="default">
        <div id="inputdiv">
          <input id="userinput" type="text" className="form-control" placeholder="Enter City"></input>
          <input
            id="subinput"
            className="btn btn-primary"
            type="submit"
            value="submit"
            onClick={this.getWeatheratCity}
          />
          <button className="btn btn-primary" onClick={this.changeUnits} >Change Units</button>
        </div>
        <div>
          <img id='icon' src={'http://openweathermap.org/img/wn/' + this.state.icon + '@4x.png'} style={{ width: 150, height: 150 }} />
        </div>
        <h2 id="cityname">{this.state.name}, {this.state.country}</h2>

        <h1>{this.state.Temperature}<span>{(this.state.units === 'metric' ? "°C" : "°F")}</span></h1>
        <div>
          <h2 className="maxmin">{"Max Temp: " + this.state.maxTemp + (this.state.units === 'metric' ? "°C" : "°F")}</h2>
          <h2 className="maxmin">{"Min Temp: " + this.state.minTemp + (this.state.units === 'metric' ? "°C" : "°F")}</h2>
          <h2 id="desc">{this.state.desc}</h2>
        </div>
        <div>
          <input
            id="forecastButton"
            className="btn btn-primary"
            value="Show Forecast"
            onClick={this.displayForecast}
          />
        </div>
        <div>
          <br />
          <h4 id="time">
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h4>
          <h4 id="date">{date.toLocaleDateString()}</h4>
        </div>
      </div>
    );
  }
}


export default MainContent;
