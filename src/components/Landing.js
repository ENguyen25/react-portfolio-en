import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../images/Headshot.jpg'

function Landing() {
    return (
        <section className="container" id="about-me">
        <div className="content">
            <div className='left-column'>
                <img id="headshot" src={headshot} alt="Evelyn's profile"/>
            </div>
            <div className='right-column'>
                <p>Hello, I'm</p>
                <h2 className='name'>Evelyn Nguyen</h2>
                <p>Professional Full-Stack Developer</p>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/about-me">
                    <button>Let's Explore</button>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Landing
