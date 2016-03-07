import Immutable from 'immutable';
import {handleActions} from 'redux-actions'

function generateBoard(height=5, width=5) {
  return Array(height).fill().map(() => Array(width).fill(-1));
}


const initialState = Immutable.fromJS({
  board: generateBoard()
});

export default handleActions({
  UPDATE_TILE_OWNERSHIP(state, action) {
    const { tile, playerId } = action.payload;
    const board = state.get('board')
    const row = board.get(tile.y);
    const newRow = row.update(tile.x , tileStatus => {
      if(tileStatus === -1) {
        return playerId;
      } else {
        return  -1;
      }
    });
    const newBoard = board.update(tile.y, () => newRow);
    return state.set('board', newBoard);
  }
}, initialState);
