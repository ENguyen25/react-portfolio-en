import React from 'react';
import tierList from '../../images/tierlist.gif'

export default function Friendship() {
    return (
        <section className='projectContainer'>
            <h2>Know More Tiers Friendship App</h2>
            <div className='projectContent'>
            <img id="project-photo" src={tierList} alt="Know More Tiers"></img>
                <div className='projectText'>
                    <p>'Know More Tiers' is a social networking app that connects like-minded people together based on how they rank their interests and hobbies. The app features an interactive tier-list where users can drag and drop their interests in a ranking. In future development, the app will have an algorithm that matches people based on the tier list they create.</p>
                    <br></br>
                    <a href="https://glacial-plains-58535.herokuapp.com/"><button>Demo</button></a>
                    <a href="https://github.com/ENguyen25/know-more-tiers"><button>GitHub</button></a>
                </div>
            </div>
    </section>
    )
};
