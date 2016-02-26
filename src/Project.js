import React from 'react';
import { Link } from 'react-router';

class Project extends React.Component {
    constructor(){
        super();
    }

    render(){
      return (
      <div>
        <div class="onoffswitch">
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" ></input>
            <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
        </div>
        <div>
        <tr>
          <td><strong><Link to="/projects/:projectId">{this.props.name}</Link></strong></td>
          <br />
        </tr>
        <tr>
          <td>{this.props.goal}</td>
          <br />
          <br />
        </tr>
        </div>
      </div>
      );
    }
}

export default Project;
