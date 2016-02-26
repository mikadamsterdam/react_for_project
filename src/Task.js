import React from 'react';
import jQuery from 'jquery';

class Task extends React.Component {
    constructor(){
        super();
    }

    componentDidMount() {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        status: this.props.status
      });
    }

    getOldState(){
      let oldState = {
	     	id: this.state.id,
	     	title: this.state.title,
	     	description: this.state.description,
        status: this.state.status
    };
    return oldState;
  }

  toggleStatus(event) {
    let component = this;


		let oldState = {
	     	id: this.state.id,
	     	title: this.state.title,
	     	description: this.state.description,
        status: this.state.status
	    }
      console.log(oldState);

		    this.state.status = !this.state.status;

		let changedState = {
	     	status: this.state.status
	      }

		let newState = jQuery.extend(oldState, changedState);

	    this.setState(newState);

	    jQuery.ajax({
	      	type: "PUT",
	      	url: 'https://taskpool.herokuapp.com/projects/1/task' + this.props.id + '.json',
	      	data: JSON.stringify({
	          	task: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	        })

	       .done(function(data) {
           console.log(data);

        component.setState({
          id: data.task.id,
          title: data.task.title,
          description: data.task.description,
          status: data.task.status
        });
        component.props.onChange();
      })

	    .fail(function(error) {
	        console.log(error);
	    });
  }

    render(){
        return (
          <div>
            <tr>
              <td>
              <button onClick={this.toggleStatus.bind(this)}>
              {this.props.finished ? "Not done" : "Done"}
              </button>
              </td>
              <td><strong>{this.props.title}</strong></td>
              <br />
            </tr>
            <tr>
              <td>{this.props.description}</td>
              <br />
              <br />
            </tr>
          </div>
      );
    }
}

export default Task;
