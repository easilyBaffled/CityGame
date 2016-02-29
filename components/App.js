import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Game from '../containers/Game'

const App = () => (
  <div>
    <Game />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
