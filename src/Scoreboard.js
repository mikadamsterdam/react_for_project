import React from 'react';
import jQuery from 'jquery';
import Player from './Player';
import AddTaskDescription from './AddTaskDescription';

class ScoreBoard extends React.Component {

    constructor(){
        super();

    }

    render() {
        return (
            <div>
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <AddTaskDescription />
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <AddTaskDescription />
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <AddTaskDescription />
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <AddTaskDescription />
            </div>
        );
    }
}

export default ScoreBoard;
