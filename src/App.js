import React, { Component } from 'react';
import Board from './component/Board'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
          <Board/>
          <h3>Now is {this.props.player_piece} Turn</h3>
      </div>
    );
  }
}


const mapState = state => ({
  player_piece: state.board.player_piece,
  board: state.board.board,
})

export default connect(mapState, null)(App);
