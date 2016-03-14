import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as GameActions from '../actions/game'
import * as BoardActions from '../actions/board'
import Board from '../components/Board'
@connect(state => {
  return {
    currentPlayerID: state.game.get('currentPlayerId'),
    currentPlayer: state.game.get('players').toJS()[state.game.get('currentPlayerId')],
    players: state.game.get('players').toJS(),
    board: state.board.board,
  }
}, {
  ...GameActions,
  ...BoardActions
})
export default class Game extends Component {
  render() {
    const {board, players, game, currentPlayer, currentPlayerID, startNextTurn, updateTileOwnerShip} = this.props;
    console.log(board)
    return <div style={{border: `5px solid ${currentPlayer.color}`}}>
      {currentPlayer.points}
      <button onClick={() => { startNextTurn(board) }}>End Turn</button>
      <Board board={board} players={players} updateTileOwnerShip={updateTileOwnerShip} currentPlayerID={currentPlayerID}/>
    </div>
  }
}
