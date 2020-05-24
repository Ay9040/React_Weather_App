import React from 'react';

class About extends React.Component{
    render(){
        return(<div>
            <div className='center_image'>
                <h1 className="center_text glitch is_glitching" data-text="About Our Application">About Our Application</h1>
            </div>
    
            <h2>Users's Location</h2>
            <div><p>Our weather retrieval application provides you with information of weather conditions of your current location by using GPS.The weather retrieval application gives information about the weather conditions of your current location.It also provides the information of the temperature of the users location,date and time.
                    The application also gives the maximum and minimum temperature of your current location and a weather forecast of upto 5 days and an hourly forecast for each day.</p>
            </div>
            <h2>City</h2>
            <div><p>Our weather retrieval application provides you with information of weather conditions of over 2,00,000 cities in the world.The weather retrieval application gives information about the weather conditions of the city.It also provides the information of the temperature,date and time of the city.It also provides us with precautionary measures for a given weather condition in the city.
                    The application also gives the maximum and minimum temperature of the city and a weather forecast of upto 5 days and an hourly forecast for each day.</p>
                    <p>The weather retrieval application was designed by Ayush Khade,Kaushik Metha and Saurabh Nambiar.</p>
            </div>
            </div>
        );
    }
}

export default About;