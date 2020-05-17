import React from "react"
import NavBar from "./Navbar"

class Forecast extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            weatherData: []
        };
        this.getWeatherForecast = this.getWeatherForecast.bind(this)
    }

    componentDidMount() {
        this.getWeatherForecast()
    }

    getWeatherForecast() {
        var cityid = this.props.city;
        fetch(
            "http://api.openweathermap.org/data/2.5/forecast?id=" +
            cityid +
            "&units=metric&appid=c1547e16f89f47b9711cb39aa31ce3a9"
        ).then((res) => res.json())
            .then((Data) => {
                this.setState({
                    weatherData: Data.list
                })
            }).catch(console.log);
    }

    render() {
        const TableRow = ({ row }) => (
            <tr>
                <td key={row.dt_txt}>{row.dt_txt}</td>
                <td key={row.weather[0].description}>{row.weather[0].description}</td>
                <td key={row.main.temp}>{row.main.temp + "°C"}</td>
                <td key={row.main.feels_like}>{row.main.feels_like + "°C"}</td>
            </tr>
        );

        const Table = ({ data }) => (
            <table className="table">
                <tr>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Temperature</th>
                    <th>Feels Like</th>
                </tr>
                {data.map((row) => {
                    return <TableRow row={row} />;
                })}
            </table>
        );


        return (<div>
            <NavBar />
            <Table data={this.state.weatherData} />
        </div>);

    }

}

export default Forecast;