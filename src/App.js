import React from 'react';
import TaskBoard from './TaskBoard';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                <hr />
                <TaskBoard />
            </div>
        );
    }
}

export default App;
