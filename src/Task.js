import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
    }

    render(){
      return (
        <div>
        <tr>
          <td>{this.props.title}</td>
        </tr>
        <tr>
          <td>{this.props.description}</td>
        </tr>
        </div>
      );
    }
}

export default Task;
