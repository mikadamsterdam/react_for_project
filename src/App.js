import React from 'react';
import Taskboard from './Taskboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                <hr />
                <Taskboard />
            </div>
        );
    }
}

export default App;
