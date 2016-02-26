import React from 'react';
import ProjectBoard from './ProjectBoard';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                <hr />
                <ProjectBoard />
            </div>
        );
    }
}

export default App;
