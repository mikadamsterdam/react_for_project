import React from 'react';
import ProjectBoard from './ProjectBoard';

class App extends React.Component {

    render() {
        return (
            <div id="board">
                <h1>Projects</h1>
                <hr />
                <ProjectBoard />
            </div>
        );
    }
}

export default App;
