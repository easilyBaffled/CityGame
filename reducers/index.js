import { combineReducers } from 'redux'
import todos from './todos'
import DevTools from '../containers/DevTools';
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
