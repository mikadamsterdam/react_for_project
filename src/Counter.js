import React from 'react';

class Counter extends React.Component {
    constructor(){
        super();

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button>+1</button>
            </div>
        );
    }
}

export default Counter;