import React from 'react';
import weather from '../../images/weather.gif'

export default function Weather() {
    return (
        <section className='projectContainer'>
            <h2>'Sunny Side Up' Weather App</h2>
            <div className='projectContent'>
            <img id="project-photo" src={weather} alt="weather"></img>
                <div className='projectText'>
                    <p>This app allows users to access weather conditions five days in advance for any city in the United States. It features a user-friendly search interface, aesthetic design, and a search history.</p>
                    <br></br>
                    <p>Through this project, I learned how to use JavaScript to fetch data from the OneWeather API, and to display weather conditions dynamically. I learned how to store data to local storage.</p>
                    <br></br>
                    <a href="https://enguyen25.github.io/sunny-side-app/"><button>Demo</button></a>
                    <a href="https://github.com/ENguyen25/sunny-side-app"><button>GitHub</button></a>
                </div>
            </div>
    </section>
    )
};
