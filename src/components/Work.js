import React from 'react';
import Cards from './Cards'

function Work() {
    return (
        <section className="container" id="work">
        <h2 className="heading">Work</h2>
        <div className="content">
            <div className="work-cards">
                <Cards id='paxamour' title='Paxamour Company Website'/>
                <Cards id='mj' title='Michael Jackson Fanpage'/>
                <Cards id='photo' title='Photo Gallery'/>
            </div>
        </div>
        </section>
    )
}

export default Work
