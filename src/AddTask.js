import React from 'react';

class AddTask extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.newTask.value, this.refs.newDescription.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Title: </label>
                <input ref="newTask" />
                <br />
                <label>Description: </label>
                <input ref="newDescription" />
                <button>Add Task</button>
            </form>
        );
    }
}

export default AddTask;
