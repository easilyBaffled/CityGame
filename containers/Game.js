import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as GameActions from '../actions/game'

@connect(state => {
  return {
    currentPlayerID: state.game.get('currentPlayerId'),
    currentPlayer: state.game.get('players').toJS()[state.game.get('currentPlayerId')],
  }
}, {
  ...GameActions
})
export default class Game extends Component {
  render() {
    return <div style={{backgroundColor: this.props.currentPlayer.color}}>
      {this.props.currentPlayer.id}
      <button onClick={this.props.startNextTurn}>End Turn</button>
    </div>
  }
}
