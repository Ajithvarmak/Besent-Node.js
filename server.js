const express = require("express")
const connectdb = require("./config_db")
const registerStudent = require("./schema")


const app = express()

app.use(express.json())

connectdb()

app.post("/register",async(req,res)=>{
    try{
        const user = req.body
        const reg = new registerStudent(user)
        const result = await reg.save()
        res.send("data send")
    }catch(err){
        res.send(err)
    }
})

app.listen(3000,()=>{
    console.log("port 3000 is running")
})


// query & params 