import React from 'react';
import TaskBoard from './TaskBoard';
import AddProject from './AddProject';


class App extends React.Component {

  onSubmit(event){
      // if we don't call event.preventDefault, the browser will think we want to submit the form
      event.preventDefault();
      this.props.onSubmit(this.refs.name.value, this.refs.goal.value);
  }

  createProject(event){
  event.preventDefault();

      let component = this;
      let title = this.refs.name.value;
      let description = this.refs.goal.value;
      let name = {
      id: null,
      title: title,
      description: description,
      status: false
  };

  jQuery.ajax({
      type: "POST",
       url: "https://taskpool.herokuapp.com/task.json",
       data: JSON.stringify({
           task: name
       }),
       contentType: "application/json",
       dataType: "json"
     })
       .done(function(data) {
         component.refs.name.value = "";
         component.refs.goal.value = "";
       })
       .fail(function(error) {
         console.log(error);
       });
  }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <AddProject />
                <TaskBoard />
            </div>
        );
    }
}

export default App;
