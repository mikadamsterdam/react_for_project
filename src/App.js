import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      TaskTitle: "Here comes the title of the task.",
      Description: "Here comes the desciption of the task."
    };
  }

    render() {
        return (
          <div>
          <h1>ProjectName</h1>
          <hr />
          <table>
            <tbody>
            <button>New Task</button>
              <h3>{this.state.TaskTitle}</h3>
                <p>{this.state.Description}</p>
              </tbody>
          </table>
          <table>
            <tbody>
              <h3>{this.state.TaskTitle}</h3>
                <p>{this.state.Description}</p>
              </tbody>
          </table>
          <table>
            <tbody>
              <h3>{this.state.TaskTitle}</h3>
                <p>{this.state.Description}</p>
              </tbody>
          </table>
          <table>
            <tbody>
              <h3>{this.state.TaskTitle}</h3>
                <p>{this.state.Description}</p>
              </tbody>
          </table>
          <table>
            <tbody>
              <h3>{this.state.TaskTitle}</h3>
                <p>{this.state.Description}</p>
              </tbody>
          </table>
          </div>
        );
    }
}

export default App;
