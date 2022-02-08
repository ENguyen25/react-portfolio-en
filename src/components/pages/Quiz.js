import React from 'react';
import quiz from '../../images/quiz.gif'

export default function Quiz() {
    return (
        <section className='projectContainer'>
        <h2>Beginners Coding Quiz</h2>
            <div className='projectContent'>
            <img id="project-photo" src={quiz} alt="coding quiz"></img>
            <div className='projectText'>
                <p>This coding quiz challenge tests developers on their knowledge of coding and programming languages. I made this coding quiz to apply my JavaScript skills in creating basic interactive web-user interfaces.</p>
                <br></br>
                <p>Through this project, I learned how to use JavaScript to make a responsive quiz that changes questions when you click an answer, saves your score, and matches your score with your initials. I also used jQuery to hide and show elements for a smooth user-interface.</p>
                <br></br>
                <a href="https://enguyen25.github.io/beginners-coding-quiz/"><button>Demo</button></a>
                <a href="https://github.com/ENguyen25/beginners-coding-quiz"><button>GitHub</button></a>
            </div>
            </div>
    </section>
    )
};
