import React from 'react';

class Player extends React.Component {
    constructor(){
        super();

        this.state = {
            score: 0
        };
    }

    plusOne() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.state.score}</td>
                <td><button onClick={this.plusOne.bind(this)}>+1</button></td>
            </tr>
        );
    }
}

export default Player;