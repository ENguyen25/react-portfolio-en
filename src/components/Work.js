import React from 'react';
import EpisoFd from './pages/EpisoFd';
import Ubiquitous from "./pages/Ubiquitous";
import Friendship from "./pages/Friendship";
import WOCOTM from './pages/WOCOTM';

function Work() {
    return (
        <div>
            <EpisoFd />
            <WOCOTM />
            <Ubiquitous />
            <Friendship />
        </div>
    )
}

export default Work
