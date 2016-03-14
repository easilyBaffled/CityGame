import Immutable from 'immutable';
import {handleActions} from 'redux-actions'
import _ from 'lodash';
function generateBoard(height=5, width=5) {
  return Array(height).fill().map(() => Array(width).fill(generateTile()));
}
function generateTile() {
  return {ownerId: -1, squareLayout: Array(3).fill().map(() => Array(3).fill(_.sample(0, 0, 0, -1)))}
}

const initialState = {
  board: generateBoard()
};

export default handleActions({
  UPDATE_TILE_OWNERSHIP(state, action) {
    const { tilePosition, playerId } = action.payload;
    const updatedState = _.update(state, `board[${tilePosition.y}][${tilePosition.x}]`, tile => {
      if(tile.ownerId === -1) {
        return {...tile, ownerId: playerId};
      } else {
        return {...tile, ownerId: -1,};
      }
    });
    return Object.assign({}, updatedState);
  }
}, initialState);
