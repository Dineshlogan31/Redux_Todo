import React from 'react'
import AddTodoForm from './components/AddTodoForm'
import TotalItem from './components/TotalItem'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>
        <AddTodoForm/>
        <TodoList/>
        <TotalItem/>
    </div>
  )
}

export default App