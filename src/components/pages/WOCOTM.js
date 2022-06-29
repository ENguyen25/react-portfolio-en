import React from 'react';
import wocotm from '../../images/wocotm.jpg'

export default function WOCOTM() {
    return (
        <section className='projectContainer'>
        <h2>Women of Color on the Move Website</h2>
            <div className='projectContent'>
            <img id="project-photo" src={wocotm} alt="women of color on the move website"></img>
            <div className='projectText'>
                <p>This website was developed using WordPress for Women of Color on the Move, a nonprofit organization that provides programs for women of color to learn important life skills such as financial literacy, mental health assistance, and job readiness.</p>
                <br></br>
                <p>Skills used: WordPress, Divi Themes</p>
                <br></br>
                <a href="https://womenofcoloronthemove.org/"><button>Demo</button></a>
            </div>
            </div>
    </section>
    )
};
