import React from 'react';
import jQuery from 'jquery';

class AddTask extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.newTask.value, this.refs.newDescription.value);
    }

createTask(event){
    event.preventDefault();

        let component = this;
        let title = this.refs.newTask.value;
        let description = this.refs.newDescription.value;
        let newTask = {
        id: null,
        title: title,
        description: description,
        status: false
    };

    jQuery.ajax({
        type: "POST",
         url: "https://taskpool.herokuapp.com/task.json",
         data: JSON.stringify({
             task: newTask
         }),
         contentType: "application/json",
         dataType: "json"
       })
         .done(function(data) {
           component.refs.newTask.value = "";
           component.refs.newDescription.value = "";
         })
         .fail(function(error) {
           console.log(error);
         });
    }

    render() {
        return (
            <form onSubmit={this.createTask.bind(this)}>
                <input ref="newTask" placeholder="Title of the task" />
                <input ref="newDescription" placeholder="Description of the task" />
                <button>Add Task</button>
            </form>
        );
    }
}

export default AddTask;
