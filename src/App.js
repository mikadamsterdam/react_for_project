import React from 'react';
import ScoreBoard from './Scoreboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>High Scores</h1>
                <ScoreBoard />
            </div>
        );
    }
}

export default App;