import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../store/TodoSlice"
const AddTodoForm = () => {
  const dispatch=useDispatch()
    const [title,setTitle]=useState('')

    let TodoSubmit=(e)=>{
      e.preventDefault()
        console.log(`your todo is ${title}`);
        dispatch(
              addTodo({title:title})
        )
        setTitle('')
        
        
    }
  return (
    <div>
        <form>
            <label>ToDo</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} ></input>
            <button onClick={TodoSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default AddTodoForm