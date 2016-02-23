import React from 'react';
import ScoreBoard from './Scoreboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>ProjectName</h1>
                      <button onClick={this.create}>New task</button>
                <ScoreBoard />
            </div>
        );
    }
}

export default App;
