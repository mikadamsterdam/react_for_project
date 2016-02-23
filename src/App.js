import React from 'react';
import Taskboard from './Taskboard';
import AddTaskDescription from './AddTaskDescription';

class App extends React.Component {
  createTask(task,description){
  console.log(task)
  console.log(description)
}
    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                <hr />
                <AddTaskDescription onSubmit={this.createTask}/>
                <hr />
                <Taskboard />
            </div>
        );
    }
}

export default App;
