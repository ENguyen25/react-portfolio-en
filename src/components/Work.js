import React from 'react';
import Cards from './Cards'

function Work() {
    return (
        <section className="container" id="work">
        <h2 className="heading">Work</h2>
        <div className="content">
            <div className="work-cards">
                <Cards id='ubiquitous' title='Ubiquitous Happiness' language='JavaScript, Sequelize, Handlebars' url='/ubiquitous'/>
                <Cards id='friendship' title='Know More Tiers' language='ReactJS, GraphQL, SASS' url='/friendship'/>
                <Cards id='blog' title='Tech Blog' language='JavaScript, Sequelize, Handlebars' url='/blog'/>
                <Cards id='weather' title='Weather App' language='JavaScript, HTML, CSS' url='/weather'/>
                <Cards id='quiz' title='Coding Quiz' language='JavaScript, HTML, CSS' url='/quiz'/>
            </div>
        </div>
        </section>
    )
}

export default Work
