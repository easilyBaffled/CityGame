import React, { Component, PropTypes } from 'react'
import Tile from './Tile'

export default class Board extends Component {
  static propTypes = {
    board: PropTypes.array,
    players: PropTypes.array,
    currentPlayerID: PropTypes.number,
  }
  render() {
    const { board, players, currentPlayerID } = this.props;
    return (
      <div id='board'>
      {
        board.map((row, y) => {
          return <div key={y}> {
                  row.map((tile, x) => {
                    let color = 'white'
                    console.log(tile)
                    if(tile.ownerId > -1) {
                      color = players[tile.ownerId].color
                    }
                    return <div key={x} className='tile' style={{border:'3px solid darkgrey', display: 'inline-block', backgroundColor: color}} onClick={() => { this._updateTileOwnerShip(y, x, currentPlayerID)}}>
                      <Tile squareLayout={tile.squareLayout} position={{x, y}}/>
                    </div>
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
