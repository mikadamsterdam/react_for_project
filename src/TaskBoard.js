import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTask from './AddTask';

class TaskBoard extends React.Component {
  constructor(){
    super();

    this.state = {
        tasks: [
          "title": "",
          "description": "",
          "status": boolean
        ]
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

  saveData(tasks){
      jQuery.ajax({
          type: "POST",
          url: "https://taskpool.herokuapp.com/",
          data: JSON.stringify({
              tasks: tasks
            }),
            contentType: "application/json",
            dataType: "json"
          });
    }

  onAddTask(newTitle, newDescription){
    var currentTasks = this.state.tasks;
    var newTasks = currentTasks.concat(newTitle, newDescription, newStatus);
    this.setState({
      tasks: newTasks
    });

    this.saveData(newTasks);

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
