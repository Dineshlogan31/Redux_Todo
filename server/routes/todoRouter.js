const express=require("express")
const { getAllTodos, addTodo, toggleCompleted, deleteTodo } = require("../controller/todoController")

const route=express.Router()

route.get("/getAllTodos",getAllTodos)

route.post("/addTodo",addTodo)

route.patch("/toggleCompleted/:id",toggleCompleted)

route.delete("/deleteTodo/:id",deleteTodo)

module.exports=route