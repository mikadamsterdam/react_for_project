import React from 'react';
import Task from './Task';
import AddTask from './AddTask';

class TaskBoard extends React.Component {
  constructor(){
    super();

    this.state = {
        tasks: [
            { title: "Chiel", description: "Do something" },
            { title: "Maurice", description: "Go to work!" },
            { title: "Ashot", description: "What are you doing?!" }
        ]
    };
}

  renderTask(task){
    return <Task
        title={task.title}
        description={task.description}
        />;
}

  onAddTask(new_title, new_description){
    var newTask = { title: new_title, description: new_description };
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
        tasks: newTasks
    });
}

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.tasks.map(this.renderTask.bind(this))}
          </tbody>
        </table>
        <AddTask onSubmit={this.onAddTask.bind(this)} />
      </div>
    );
  }
}

export default TaskBoard;
