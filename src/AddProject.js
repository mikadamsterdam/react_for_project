import React from 'react';
import jQuery from 'jquery';

class AddProject extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.newName.value, this.refs.newGoal.value);
    }

    createProject(event){
      event.preventDefault();

        let component = this;
        let name = this.refs.newName.value;
        let goal = this.refs.newGoal.value;
        let newProject = {
        id: null,
        name: name,
        goal: goal
    };

    jQuery.ajax({
        type: "POST",
         url: "https://taskpool.herokuapp.com/projects.json",
         data: JSON.stringify({
             project: newProject
         }),
         contentType: "application/json",
         dataType: "json"
       })
         .done(function(data) {
           component.refs.newName.value = "";
           component.refs.newGoal.value = "";
         })
         .fail(function(error) {
           console.log(error);
         });
    }

    render() {
        return (

          <div id="add">
            <form onSubmit={this.createProject.bind(this)}>
            <input ref="newName" placeholder="Title of the project" />
            <input ref="newGoal" placeholder="Goal of the project" />
            <button>Add project</button>
            </form>
            </div>
        );
    }
}

export default AddProject;
