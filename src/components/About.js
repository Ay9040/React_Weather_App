import React from 'react';

class About extends React.Component {
    render() {
        document.getElementById("root").className = 'default';
        return (<div>
            <div className='image'>
                <h1 className='head'>Weather Retrieval Application</h1>
            </div>

            <div className='image2'>
                <h2>Users's Location</h2>
                <ul className='para'>
                    <li>Get information of weather conditions of your current location by using GPS</li>
                    <li>The weather retrieval application gives information about the weather conditions of your current location</li>
                    <li>It also provides the information of the temperature of the users location,date and time</li>
                    <li>The application also gives the maximum and minimum temperature of your current location </li>
                    <li>A weather forecast of upto 5 days and a 3 hours forecast for each day</li>
                </ul>
            </div>

            <div className='image3'>
                <h2>City</h2>
                <ul className='para1'>
                    <li>Get information of weather conditions of over 2,00,000 cities in the world</li>
                    <li>The weather retrieval application gives information about the weather conditions of the city</li>
                    <li>It also provides the information of the temperature,date and time of the city</li>
                    <li>It also provides us with precautionary measures for a given weather condition in the city</li>
                    <li>The application also gives the maximum and minimum temperature of the city</li>
                    <li>A weather forecast of upto 5 days and a 3 hours forecast for each day.</li>
                </ul>
                <p className='para2'>The weather retrieval application was designed by Ayush Khade,Kaushik Metha and Saurabh Nambiar.</p>
            </div>
        </div>
        );
    }
}

export default About;
