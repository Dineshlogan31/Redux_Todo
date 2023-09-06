import React ,{useEffect}from 'react'
import TodoItem from "./TodoItem"
import {useDispatch, useSelector} from "react-redux"
import {getAllTodos} from "../store/TodoSlice"

const TodoList = () => {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todos)
  console.log(todos);
  useEffect(()=>{
   dispatch(
    getAllTodos()
   )
  },[dispatch])
  return (
    <ul>
    {
      todos.map((todo)=>{
        return <TodoItem key={todo._id} id={todo._id} title={todo.title} completed={todo.completed}  />
      })
    }
       
    </ul>
  )
}

export default TodoList
