import React from 'react';
import jQuery from 'jquery';
import Player from './Player';
import AddPlayer from './AddPlayer';

class ScoreBoard extends React.Component {

    constructor(){
        super();

        this.state = {
            message: "",
            players: []
        };
    }

    componentDidMount(){
        // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
        var self = this;
        jQuery.getJSON("http://hook.io/nextminds/scores", function(data){
            self.setState({
                players: data.players
            });
        });
    }

    onChangeScore(name, score){
        // create a new list of player by looping over the existing list
        // and replacing the player we want to change the score for
        var oldPlayers = this.state.players;
        var newPlayers = oldPlayers.map(function(player){
            if(player.name == name){
                return {
                    name: player.name,
                    score: score
                }
            }

            return player;
        });

        this.setState({
            message: name + " scored and has " + score + " points.",
            players: newPlayers
        });

        this.saveData(newPlayers);
    }

    renderPlayer(player){
        return <Player
            name={player.name}
            score={player.score}
            onChange={this.onChangeScore.bind(this)} />;
    }

    saveData(players){
        jQuery.ajax({
            type: "POST",
            url: "http://hook.io/nextminds/scores",
            data: JSON.stringify({
                players: players
            }),
            contentType: "application/json",
            dataType: "json"
        });
    }

    onAddPlayer(username){
        var newPlayer = { name: username, score: 0 };
        var newPlayers = this.state.players.concat(newPlayer);
        this.setState({
            players: newPlayers
        });

        this.saveData(newPlayers);
    }

    render() {
        return (
            <div>
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
                        <tr colSpan="3">
                            <td>{this.state.message}</td>
                        </tr>
                    </tfoot>
                </table>
                <AddPlayer onSubmit={this.onAddPlayer.bind(this)} />
            </div>
        );
    }
}

export default ScoreBoard;