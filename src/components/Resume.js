import React from 'react';
import Experience from './Experience';
import experiences from '../experience.json';
import resume from '../ENguyen_Resume.pdf';

function Resume() {
    return (
        <section className="container" id="resume">
        <h2 className="heading">Resume</h2>
        <div className="content">
            {experiences.map(list => <Experience item={list} />)}
        <h4>
          <a href = {resume} target = "_blank">Link to Resume</a>
        </h4>
        </div>
        </section>
    )
}

export default Resume
