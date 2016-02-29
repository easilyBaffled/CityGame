import Immutable from 'immutable';
import {handleActions} from 'redux-actions'

const initialState = Immutable.fromJS({
  players: [
    {id: 0, color: 'red'},
    {id: 1, color: 'blue'},
  ],
  currentPlayerId: 0,
});

export default handleActions({
  START_NEXT_TURN(state, action) {
    let currentPlayerId = state.get('currentPlayerId') + 1;
    if (currentPlayerId === state.get('players').size) currentPlayerId = 0;    
    return state.set('currentPlayerId', currentPlayerId);
  }
}, initialState);
