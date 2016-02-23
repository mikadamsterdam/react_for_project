import React from 'react';
import Taskboard from './Taskboard';
import AddTaskDescription from './AddTaskDescription';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                <hr />
                <AddTaskDescription />
                <hr />
                <Taskboard />
            </div>
        );
    }
}

export default App;
