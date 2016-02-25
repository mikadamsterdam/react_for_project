import React from 'react';

class Project extends React.Component {
    constructor(){
        super();
    }

    render(){
      return (
        <div>
        <tr>
          <td><input type="checkbox" name="Task" value="work done" /></td>
          <td><strong>{this.props.name}</strong></td>
          <br />
        </tr>
        <tr>
          <td>{this.props.goal}</td>
          <br />
          <br />
        </tr>
        </div>
      );
    }
}

export default Project;
