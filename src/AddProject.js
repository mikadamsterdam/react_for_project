import React from 'react';
import jQuery from 'jquery';

class AddProject extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.name.value, this.refs.goal.value);
    }

createProject(event){
    event.preventDefault();

        let component = this;
        let name = this.refs.name.value;
        let goal = this.refs.goal.value;
        let project = {
        id: null,
        name: name,
        description: description,
        status: false
    };

    jQuery.ajax({
        type: "POST",
         url: "https://taskpool.herokuapp.com/projects.json",
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
            <form onSubmit={this.createProject.bind(this)}>
                <label>Name: </label><br/>
                <input ref="name" />
                <br />
                <label>Goal: </label><br/>
                <input ref="goal" /><br/>
                <button>Add Task</button><br/><br/>
            </form>
        );
    }
}

export default AddProject;
