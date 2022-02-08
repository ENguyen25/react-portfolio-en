import React from 'react';
import ubHero from '../../images/ub-hero.png'

export default function Ubiquitous() {
    return (
        <section className='projectContainer'>
            <h2>Ubiquitous Happiness</h2>
            <div className='projectContent'>
                <img id="project-photo" src={ubHero} alt="Ubiquitous Happiness"/>
                <div className='projectText'>
                    <p>'Ubiquitous Happiness' is a community forum intended to track trending-up streamers, featured streams, game releases and aid in the promotion of streamer channels using the Twitch and Steam API’s. Its current features are user ability to post forums and comments, and user authentication.</p>
                    <br></br>
                    <p>This project strengthened my skills in developing API's with Sequelize, and inspired me to create my own blog. In the future I hope to create an app where people of similar interests can connect together.</p>
                    <br></br>
                    <a href="https://ubiquitous-p2.herokuapp.com/"><button>Demo</button></a>
                    <a href="https://github.com/ENguyen25/ubiquitous-happiness"><button>GitHub</button></a>
                </div>
            </div>
        </section>
    )
};
