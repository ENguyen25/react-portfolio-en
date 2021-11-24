import React from 'react';
import Cards from './Cards'

function Work() {
    return (
        <section className="container" id="work">
        <h2 className="heading">Work</h2>
        <div className="content">
            <div className="work-cards">
                <Cards id='ubiquitous' title='Ubiquitous Happiness' language='JavaScript, Sequelize, Handlebars' url='https://ubiquitous-p2.herokuapp.com/'/>
                <Cards id='blog' title='Tech Blog' language='JavaScript, Sequelize, Handlebars' url='http://tech-4-social-good.herokuapp.com/'/>
                <Cards id='lucid' title='LUCID STREAM' language='JavaScript, HTML, CSS' url='https://enguyen25.github.io/video-generator'/>
                <Cards id='weather' title='Weather App' language='JavaScript, HTML, CSS' url='https://enguyen25.github.io/sunny-side-app/'/>
                <Cards id='quiz' title='Coding Quiz' language='JavaScript, HTML, CSS' url='https://enguyen25.github.io/beginners-coding-quiz'/>
            </div>
        </div>
        </section>
    )
}

export default Work
