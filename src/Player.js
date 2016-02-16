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