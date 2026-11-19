const express = require("express")

const app = express()

app.get("/student",(req,res)=>{

    res.send("hey arun")

})

app.listen(3000,()=>{
    console.log("port 3000 is running")
})