import { combineReducers } from 'redux'
import DevTools from '../containers/DevTools'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import game from './game'


const todoApp = combineReducers({
  todos,
  game,
  visibilityFilter
})

export default todoApp
