import React from 'react';
import headshot from '../images/Headshot.jpg'

function AboutMe() {
    return (
        <section className="container" id="about-me">
        <h2 className="heading">About Me</h2>
        <div className="content">
            <img src={headshot} alt="Evelyn's profile"/>
            <p>Hey there! I am a graduate of University of California, Davis with double Bachelors of Arts in Sociology-Organizational Studies and Psychology.
                <br/><br/>I am an aspiring social entrepreneur with a passion for creating products and establishing manufacturing processes that reduce environmental and social harm. I am in the process of producing fashionable items, such as tote bags and purses, using second-hand fabric.
                <br/><br/>My philosophy of business leadership is mindfulness of people and the environment. I believe that our greatest resources are the people who work for a company, from the bottom to the top, and everyone should be treated with equal respect and dignity regardless of their position in the hierarchy. I also believe that we should give back to our Earth as much as we take from Her. I strive to practice all aspects of this philosophy through my company.
            </p>
        </div>
        </section>
    )
}

export default AboutMe
