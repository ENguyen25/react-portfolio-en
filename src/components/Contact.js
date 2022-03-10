import React from 'react';

function Contact() {
    return (
        <section class="container" id="about-me">
        <div class="content">
            <div className='left-column'>
                <h2 class="heading">Contact Me</h2>
                <p>Interested in collaborating? Reach out through any of these platforms.</p>
            </div>
            <div className='right-column'>
                <h3>Phone Number</h3>
                <p>916-627-5587</p>
                <br></br>
                <h3>Email</h3>
                <p>enguyen6208@gmail.com</p>
                <p><a id="links" href="https://www.linkedin.com/in/evelyn-ngoc-nguyen/">LinkedIn</a></p>
                <p><a id="links" href="https://github.com/ENguyen25">GitHub</a></p>
            </div>
        </div>
        </section>
    )
}

export default Contact
