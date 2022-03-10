import React from 'react';
import Experience from './Experience';
import experiences from '../experience.json';
import resume from '../ENguyen_Resume.pdf';

function Resume() {
    return (
        <section className="container" id="resume">
        <div className="content">
        <h2>Past Experience</h2>
            {experiences.map(list => <Experience item={list} />)}
        <h4>
          <a href = {resume} target = "_blank">Link to Resume</a>
        </h4>
        </div>
        </section>
    )
}

export default Resume
