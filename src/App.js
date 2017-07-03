import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wins: 0,
            losses: 0,
            ties: 0,
            player_choice: 'none',
            computer_choice: 'none',
            game_result: 'none'
        }
    }

    render () {
        return (
<div id="App">
                <div id="container">
                    <div id="game">
                        <button onclick={this.playGame('rock')} class="my-button"><img src="aRock1.jpg" /></button>
                        <button onclick={this.playGame('paper')} class="my-button"><img src="toiletpaper1.jpg" /></button>
                        <br />
                        <button onClick={this.playGame('scissors')} class="my-button"><img src="GiantScissors.jpg" /></button>
			        </div>
                    <div id="message">
                         Player Chose: <span id="player-choice"> {this.state.player_choice} </span>
                         <br />
                         Computer Chose: <span id="computer-choice"> {this.state.computer_choice} </span>
                         <br />
                         Result: <span id="result"> {this.state.game_result} </span>
                         <br />
                         <button onclick={this.playAgain()}> Play Again? </button>
			        </div>
                    <div id="tracker">
                         Wins: <span id="wins"> {this.state.wins} </span>
                         <br />
                         Losses: <span id="losses"> {this.state.losses} </span>
                         <br />
                         Ties: <span id="ties"> {this.state.ties} </span>
			        </div>
                </div>
              </div>
        )
    }
}


export default App;