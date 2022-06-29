import React from 'react';
import episofd from '../../images/episofd.jpg'

function EpisoFd() {
    return (
        <section className='projectContainer'>
            <h2>Episo Foundation Website</h2>
            <div className='projectContent'>
                <img id="project-photo" src={episofd} alt="Ubiquitous Happiness"/>
                <div className='projectText'>
                    <p>This website was the result of collaborating with other developers in an event hosted by 48in48, a charity organization that connects nonprofit organizations with volunteer web developers. We created a WordPress website for Episo Foundation, an organization that strives to help formerly incarcerated female minorities to succeed in life.</p>
                    <br></br>
                    <p>Skills used: WordPress, BeaverBuilder Plugin</p>
                    <br></br>
                    <a href="https://episfoundation.s2.48in48.org/"><button>Demo</button></a>
                </div>
            </div>
        </section>
    )
}

export default EpisoFd;