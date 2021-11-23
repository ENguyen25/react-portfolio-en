import React from 'react';

function Cards(props) {
    return (
        <div className="content-cards" id={props.id}>
            <div className="subtitle">
                <h3>{props.title}</h3>
                <p>HTML/CSS</p>
            </div>
        </div>
    )
}

export default Cards
