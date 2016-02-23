import React from 'react';

class AddTaskDescription extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.task.value);
        this.props.onSubmit(this.refs.description.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Title: </label>
                <input ref="task" />
                <br />
                <label>Description: </label>
                <input ref="description" />
                <button>Add Task</button>
            </form>

        );
    }
}

export default AddTaskDescription;
