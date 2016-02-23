import React from 'react';
import Taskboard from './Taskboard';

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
<<<<<<< HEAD
||||||| merged common ancestors
                <AddTaskDescription />
                <hr />
=======
                <AddTaskDescription onSubmit={this.createTask}/>
                <hr />
>>>>>>> c0a951e296d5b4933bfb51d9d580dd84509aca20
                <Taskboard />
            </div>
        );
    }
}

export default App;
