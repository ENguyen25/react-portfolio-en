import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <section className="container" id="about-me">
        <div className="content">
            <div className="left-column">
                <h2>Skills</h2>
                <h3>User Facing</h3>
                <p>HTML, CSS, JavaScript, React, ApolloClient, jQuery, Bootstrap, Bulma, Responsive Designs.</p>
                <br></br>
                <h3>Server Side</h3>
                <p>API, RESTful, Node.js, Express, ApolloServer, MySQL, Sequelize, GraphQL, Mongoose, MongoDB.</p>
            </div>
            <div className="right-column">
                <h2>Passions and Interests</h2>
                <p>
                    I am a Full-Stack Web Developer with experience in JavaScript frameworks, front-end frameworks, and responsive design. I am interested in creating aesthetically pleasing, dynamic websites that appeal to user needs.
                    <br/><br/>My passions lie in developing technology for social good and providing more resources for marginalized communities. As an aspiring social entrepreneur, I hope to contribute to the development of technology and companies that better our society.
                </p>
                <br></br>
                <br></br>
                <Link to="/work">
                    <button>My Work</button>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default AboutMe
