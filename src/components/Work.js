import React from 'react';
import Cards from './Cards'

function Work() {
    return (
        <section className="container" id="work">
        <h2 className="heading">Work</h2>
        <div className="content">
            <div className="work-cards">
                <Cards id='ubiquitous' title='Ubiquitous Happiness' language='JavaScript, Sequelize, Handlebars'/>
                <Cards id='blog' title='Tech Blog' language='JavaScript, Sequelize, Handlebars'/>
                <Cards id='lucid' title='LUCID STREAM' language='JavaScript, HTML, CSS'/>
                <Cards id='weather' title='Weather App' language='JavaScript, HTML, CSS'/>
                <Cards id='quiz' title='Coding Quiz' language='JavaScript, HTML, CSS'/>
            </div>
        </div>
        </section>
    )
}

export default Work
