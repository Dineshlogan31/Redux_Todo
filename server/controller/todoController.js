const Todo=require("../model/todoModel")


//get All Todos
const getAllTodos=async (req,res)=>{
    const todos=await Todo.find({})
    res.status(200).json(todos)
    
}

//addTodo todocontroller
const addTodo=async (req,res)=>{
    const {title}=req.body

    const todo=await Todo.create({title})
    
    res.status(200).json(todo)

}


//completed Task todocontroller
const toggleCompleted=async (req,res)=>{
    const {id}=req.params
    const {completed}=req.body
    
   const response=await Todo.findOneAndUpdate({_id:id},{completed:completed})
   res.json(response)
    
}


//delete todocontroller
const deleteTodo=async (req,res)=>{
    const {id}=req.params

    const response=await Todo.findByIdAndDelete({_id:id})
    res.json(response)
}
module.exports={getAllTodos,addTodo,toggleCompleted,deleteTodo}