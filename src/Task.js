import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
    }

    render(){
      return (
        <div>
        <tr>
          <td><input type="checkbox" name="Task" value="work done" /></td>
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
