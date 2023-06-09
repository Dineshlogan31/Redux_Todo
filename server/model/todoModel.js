const {model,Schema} =require("mongoose")

const todoSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=model("todo",todoSchema)