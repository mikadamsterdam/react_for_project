import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

    render() {
        return (
            <div id="board">
                <h1>Projects</h1>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default App;
