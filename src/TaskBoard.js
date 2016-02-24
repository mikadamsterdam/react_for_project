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
    var currentTasks = this.state.tasks;
    var newTasks = currentTasks.concat(new_title, new_description);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div>
        <AddTask onSubmit={this.onAddTask.bind(this)} />
      </div>
      <hr />
      <div>
        <table>
          <tbody>
              {this.state.tasks.map(this.renderTask.bind(this))}
              </tbody>
            </table>
      </div>
    );
  }
}

export default TaskBoard;
