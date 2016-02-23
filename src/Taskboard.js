import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTaskDescription from './AddTaskDescription';

class Taskboard extends React.Component {

    constructor(){
        super();

    }

    render() {
        return (
            <div>
              <table>
                <tr>
                  <td><h3>TaskTitle</h3></td>
                </tr>
                <tr>
                  <td><p>A little description of the task.</p></td>
                </tr>
              </table>
            </div>
        );
    }
}

export default Taskboard;
