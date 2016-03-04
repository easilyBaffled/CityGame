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
    const board = state.get('board').toJS();
    const tileStatus = board[action.tile.y][action.tile.x];
    if(tileStatus === -1) {
      board[action.tile.y][action.tile.x] = action.playerId;
    } else {
      board[action.tile.y][action.tile.x] = -1;
    }
    return state.set('board', board);
  }
}, initialState);
