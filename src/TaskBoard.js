import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTask from './AddTask';

class TaskBoard extends React.Component {
  constructor(){
    super();

    this.state = {
        tasks: []
    };
}

  reloadTaskBoard(){
    let component = this;
    jQuery.getJSON("https://taskpool.herokuapp.com/projects/", function(data){
      component.setState({
          tasks: data.tasks
      })
    });
  }

  componentDidMount() {
    this.reloadTaskBoard();
 }

  renderTask(task){
    return <Task
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        />;
}

  render() {
    return (
      <div>
        <AddTask onChange={this.reloadTaskBoard.bind(this)} />
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
