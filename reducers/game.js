import Immutable from 'immutable';
import {handleActions} from 'redux-actions'
import _ from 'lodash'
const initialState = Immutable.fromJS({
  players: [
    {id: 0, color: 'red', points: 0},
    {id: 1, color: 'blue', points: 0},
  ],
  currentPlayerId: 0,
});

export default handleActions({
  START_NEXT_TURN(state, action) {
    const { board } = action.payload;
    let currentPlayerId = state.get('currentPlayerId') + 1;
    if (currentPlayerId === state.get('players').size) currentPlayerId = 0;

    let additionalPoints = (Math.floor(Math.random() * 6) + 1) + _(board).flatten().filter((value) => value === currentPlayerId).value().length;

    const updatedPlayers = state.get('players').update(currentPlayerId, player => {
      return player.set('points', player.get('points') + additionalPoints);
    })
    return state.set('currentPlayerId', currentPlayerId)
                .set('players', updatedPlayers);
  }
}, initialState);
