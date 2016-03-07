import {createAction} from 'redux-actions'

export const updateTileOwnerShip = createAction('UPDATE_TILE_OWNERSHIP', (row, column, playerId) => {  
  return {
    tile:{
      x: column,
      y: row,
    },
    playerId,
  }
});
