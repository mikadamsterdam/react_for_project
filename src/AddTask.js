import React from 'react';

class AddTask extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.new_task.value, this.refs.new_description.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Title: </label>
                <input ref="new_task" />
                <br />
                <label>Description: </label>
                <input ref="new_description" />
                <button>Add Task</button>
            </form>
        );
    }
}

export default AddTask;
