import React, { Component } from 'react'
import { connect } from 'react-redux'
import { game } from '../actions'

@connect(state => {
  return {
    currentPlayer: state.game.get('players').toJS()[state.game.get('currentPlayerId')],
  }
})
export default class Game extends Component {
  render() {
    return <div style={{backgroundColor: this.props.currentPlayer.color}}>{this.props.currentPlayer.id}</div>
  }
}
