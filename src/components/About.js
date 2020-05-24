import React from 'react';

class About extends React.Component{
    render(){
        document.getElementById("root").className='default';
        return(<div>
            <div className='image'>
                <h1 className='head'>About Our Application</h1>
            </div>
           
            <div className='image2'>
            <h2 className='head1'>Users's Location</h2>
            <div className='block1'><p className='para'>Our weather retrieval application provides you with information of weather conditions of your current location by using GPS.The weather retrieval application gives information about the weather conditions of your current location.It also provides the information of the temperature of the users location,date and time.The application also gives the maximum and minimum temperature of your current location and a weather forecast of upto 5 days and an hourly forecast for each day.</p>
            </div>
                </div>
               
            <div className='image3'>
            <h2 className='head3'>City</h2>
            <div className='block2'><p className='para1'>Our weather retrieval application provides you with information of weather conditions of over 2,00,000 cities in the world.The weather retrieval application gives information about the weather conditions of the city.It also provides the information of the temperature,date and time of the city.It also provides us with precautionary measures for a given weather condition in the city.The application also gives the maximum and minimum temperature of the city and a weather forecast of upto 5 days and an hourly forecast for each day.</p>
            <p className='para2'>The weather retrieval application was designed by Ayush Khade,Kaushik Metha and Saurabh Nambiar.</p>
            </div>
           </div>
            </div>
        );
    }
}

export default About;