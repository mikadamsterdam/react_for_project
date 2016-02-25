import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
    }

    getComponent(event) {
      console.log('Task selected!');
      event.currentTarget.style.backgroundColor = '#00cc00';
  }

    render(){
      return (
        <div>
          <tr>
            <td><strong onClick={this.getComponent.bind(this)}>{this.props.title}</strong></td>
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
