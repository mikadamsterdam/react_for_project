import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTask from './AddTask';

class TaskBoard extends React.Component {
  constructor(){
    super();

    this.state = {
        tasks: [ ]
    };
}

componentDidMount() {
   let component = this;
   jQuery.getJSON("https://taskpool.herokuapp.com/", function(data){
       component.setState({
           tasks: data.tasks
       })
   });
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
      <hr />
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
