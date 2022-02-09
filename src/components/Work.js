import React from 'react';
import Ubiquitous from "./pages/Ubiquitous"
import Friendship from "./pages/Friendship"
import Blog from "./pages/Blog"
import Weather from "./pages/Weather"
import Quiz from "./pages/Quiz"

function Work() {
    return (
        <div>
            <Ubiquitous />
            <Friendship />
            <Blog />
            <Weather />
            <Quiz />
        </div>
    )
}

export default Work
