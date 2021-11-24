import React from 'react';
import headshot from '../images/Headshot.jpg'

function AboutMe() {
    return (
        <section className="container" id="about-me">
        <h2 className="heading">About Me</h2>
        <div className="content">
            <img id="headshot" src={headshot} alt="Evelyn's profile"/>
            <p id="bio">Hey there! I am a Full-Stack Web Developer with experience in JavaScript frameworks, front-end frameworks, and responsive design. I am interested in creating aesthetically pleasing, dynamic websites that appeal to user needs.
                <br/><br/>My passions lie in developing technology for social good and providing more resources for marginalized communities. As an aspiring social entrepreneur, I hope to contribute to the development of technology and companies that better our society.
            </p>
        </div>
        </section>
    )
}

export default AboutMe
