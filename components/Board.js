import React, { Component, PropTypes } from 'react'
import Board from '../components/Board'

export default class Game extends Component {
  static propTypes = {
    board: PropTypes.array,
    players: PropTypes.array,
    currentPlayerID: PropTypes.number,
  }
  render() {
    const { board, players, currentPlayerID } = this.props;
    console.log(board)
    return (
      <div id='board'>
      {
        board.map((row, y) => {
          return <div key={y}> {
                  row.map((column, x) => {
                    console.log(column, players)
                    let color = 'white'
                    if(column > -1) {
                      color = players[column].color
                    }
                    return <div key={x} className='tile' style={{border:'1px solid black', height: '50', width: '50', display: 'inline-block', backgroundColor: color}} onClick={() => { this._updateTileOwnerShip(y, x, currentPlayerID)}}></div>
                  })}
                </div>
        })
      }
      </div>
    );
  }
  _updateTileOwnerShip = (row, column, playerId) => {
    this.props.updateTileOwnerShip(row, column, playerId);
  }
}
