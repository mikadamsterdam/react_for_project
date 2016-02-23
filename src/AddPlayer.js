import React from 'react';

class AddPlayer extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.username.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Username</label>
                <input ref="username" />
                <button>Add Player</button>
            </form>
        );
    }
}

export default AddPlayer;