import React from 'react';
import Experience from './Experience'
import experiences from '../experience.json'

function Resume() {
    return (
        <section className="container" id="resume">
        <h2 className="heading">Resume</h2>
        <div className="content">
            {experiences.map(list => <Experience item={list} />)}
        </div>
        </section>
    )
}

export default Resume
