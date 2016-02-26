import React from 'react';
import jQuery from 'jquery';
import Project from './Project';
import AddProject from './AddProject';

class ProjectBoard extends React.Component {
  constructor(){
    super();

    this.state = {
        projects: [
        ]
    };
}

  reloadProjectBoard(){
    let component = this;
      jQuery.getJSON("https://taskpool.herokuapp.com/projects/", function(data){
        component.setState({
          projects: data.projects
        })
      });
    }

  componentDidMount() {
    this.reloadProjectBoard();
   }

  renderProject(project){
    return <Project
        id={project.id}
        name={project.name}
        goal={project.goal}
        />;
}

  onAddProject(newName, newGoal){
    var currentProjects = this.state.projects;
    var newProjects = currentProjects.concat(newName, newGoal);
    this.setState({
      projects: newProjects
    });
  }

  render() {
    return (
      <div>
        <AddProject onSubmit={this.onAddProject.bind(this)} />
      <hr />
        <table>
          <tbody>
              {this.state.projects.map(this.renderProject.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProjectBoard;
