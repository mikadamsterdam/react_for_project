import React from 'react';
import Player from './Player';

class ScoreBoard extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Score</td>
                        <td>+1</td>
                    </tr>
                </thead>
                <tbody>
                    <Player name="Benjamin" />
                    <Player name="Wouter" />
                    <Player name="Rory" />
                </tbody>
            </table>
        );
    }
}

export default ScoreBoard;