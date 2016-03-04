import React, { Component, PropTypes } from 'react'
import Board from '../components/Board'

export default class Game extends Component {
  static propTypes = {
    board: PropTypes.array,
    players: PropTypes.array,
  }
  render() {
    const { board, players } = this.props;
    return (
      <div id='board'>
      {
        board.map(row => {
          return <div> {
                  row.map(column => {
                    return <div class='tile' style={{border:'1px solid black', height: '50', width: '50', display: 'inline-block'}}></div>
                  })}
                </div>
        })
      }
      </div>
    );
  }
}
