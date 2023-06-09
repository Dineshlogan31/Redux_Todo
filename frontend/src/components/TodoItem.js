import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleCompleted,deleteTodo} from "../store/TodoSlice"

const TodoItem = ({id,title,completed}) => {
const dispatch=useDispatch()
  let handleCheckboxClick=(e)=>{
  dispatch(
    toggleCompleted({
      id,completed:!completed
    }))
  }

  let handleDelete=()=>{
    dispatch(
           deleteTodo({id})
    )
  }
  return (
    <li >
    <div  >
      <span >
        <input
          type='checkbox'
          onChange={handleCheckboxClick}
          checked={completed}
        ></input>
        {title}
      </span>
      <button type='submit' onClick={handleDelete} >Delete</button>
    </div>
  </li>
  )
}

export default TodoItem