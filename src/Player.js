import React from 'react';

class Player extends React.Component {
    constructor(){
        super();

        this.state = {
            score: 0
        };
    }

    plusOne() {
        var newScore = this.state.score + 1;

        this.setState({
            score: newScore
        });

        this.props.onChange(this.props.name, newScore);
    }

    renderPrize() {
        if(this.state.score >= 10){
            return <img src="http://goo.gl/u1KKqp" />
        }

        return null;
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.state.score} {this.renderPrize()}</td>
                <td>
                    <button onClick={this.plusOne.bind(this)}>+1</button>
                </td>
            </tr>
        );
    }
}

export default Player;