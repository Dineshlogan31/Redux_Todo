import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

//create asynchronous addTodo method
export const addTodo=createAsyncThunk(
    "todo/addTodo",
    async (payload)=>{
        const response=await fetch("https://task-8x40.onrender.com/addTodo",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                title:payload.title
            })
        })
        if(response.ok)
        {
            const todo=await response.json()
            return {todo}
        }
    })


//create asynchronous getAllTodo method
export const getAllTodos=createAsyncThunk(
    "todos/getAllTodos",
    async ()=>{
       const response=await fetch("https://task-8x40.onrender.com/getAllTodos")
       if(response.ok)
       {
       const todos=await response.json()
       return {todos}
       }
    })


//create asynchronous completedTask method
export const toggleCompleted=createAsyncThunk(
    "todo/toggleCompleted",
    async (payload)=>{
        console.log(payload);
        const response=await fetch(`https://task-8x40.onrender.com/toggleCompleted/${payload.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({completed:payload.completed})
        })
        if(response.ok)
       {
        const todo=await response.json()
       
        return {todo}
       }
    })


//create asynchronous deleteTodo method
export const deleteTodo=createAsyncThunk(
    "todo/deleteTodo",
    async (payload)=>{
        const response=await fetch(`https://task-8x40.onrender.com/deleteTodo/${payload.id}`,{
            method:"DELETE",
        })
        if(response.ok)
        {
            const todo=await response.json()
            return {todo}
        }
    }
)


//Create a slice for Todo action and reducer using createSlicer
export const todoSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{

    },

    //i give extra reducers for asynchronous methods handling based on promise fulfilled
    extraReducers:{
        [getAllTodos.fulfilled]:(state,action)=>{
            return action.payload.todos
        },
        [addTodo.fulfilled]:(state,action)=>{
            state.push(action.payload.todo)
        },
        [toggleCompleted.fulfilled]:(state,action)=>{
            const index=state.findIndex((todo)=>todo._id===action.payload.todo._id)
            state[index].completed=action.payload.todo.completed
        },
        [deleteTodo.fulfilled]:(state,action)=>{
            state.filter((todo)=>todo._id!==action.payload.todo._id)
        }
    }
})

export default todoSlice.reducer