import React from 'react';
import jQuery from 'jquery';
import Player from './Player';
import AddPlayer from './AddPlayer';

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
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
              <table>
                <tr>
                  <td><h3>ProjectTitle</h3></td>
                </tr>
                <tr>
                  <td><p>ProjectDescription</p></td>
                </tr>
              </table>
            </div>
        );
    }
}

export default ScoreBoard;
