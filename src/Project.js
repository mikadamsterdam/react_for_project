import React from 'react';

class Project extends React.Component {
    constructor(){
        super();
    }

    render(){
      return (
        <div>
        <tr>
<<<<<<< HEAD
          <td><input type="checkbox" name="Project" value="work done" />   </td>
=======
          <td><input type="checkbox" name="Project" value="work done" /></td>
>>>>>>> 37090ed8df42cfa40c0ca5f5bf6781981ea32860
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
