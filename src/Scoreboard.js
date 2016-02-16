import React from 'react';
import Player from './Player';

class ScoreBoard extends React.Component {

    constructor(){
        super();

        this.state = {
            message: "There are no scores yet.",
            players: [
                { name: "Benjamin", score: 0},
                { name: "Wouter", score: 0 },
                { name: "Rory", score: 0 }
            ]
        };
    }

    onChangeScore(name, score){
        this.setState({
            message: name + " scored and has " + score + " points."
        });
    }

    renderPlayer(player){
        return <Player
            name={player.name}
            score={player.score}
            onChange={this.onChangeScore.bind(this)} />;
    }

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
                    {this.state.players.map(this.renderPlayer.bind(this))}
                </tbody>
                <tfoot>
                    <tr colspan="3">
                        <td>{this.state.message}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default ScoreBoard;