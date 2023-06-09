const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const router=require("./routes/todoRouter")

require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())

app.use("/",router)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(5000,(err)=>{
        if(err) throw err
        console.log("Database connected & Listening on port 5000");
    })
})
.catch((err)=>{
    console.log(err);
})





