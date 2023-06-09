import React from 'react'
import { useSelector } from 'react-redux'

const TotalItem = () => {
  const items=useSelector((state)=>state.todos.filter((todo)=>todo.completed===true))
  return (
    <h3>Total Completed Tasks:{items.length}</h3>
  )
}

export default TotalItem