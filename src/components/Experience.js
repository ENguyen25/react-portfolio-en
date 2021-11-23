import React, { useState } from 'react';

function Experience(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`resume-card ${isOpen ? 'open' : ''}`}>
            <h3 className="resume-header" onClick={() => setIsOpen(!isOpen)}>{props.item.position} - {props.item.company}</h3>
            <div className="resume-content">
                {isOpen ?
                    <ul>
                        {props.item.listItems.map(item => <li>{item}</li>)}
                    </ul>
                : ''}
            </div>
        </div>
    )
}

export default Experience
