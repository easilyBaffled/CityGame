import { combineReducers } from 'redux'
import DevTools from '../containers/DevTools'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import game from './game'
import board from './board'


const todoApp = combineReducers({
  game,
  board,
})

export default todoApp
