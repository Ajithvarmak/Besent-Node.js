const express = require("express")
const connectdb = require("./config_db")


const app = express()

app.use(express.json())

connectdb()

let data = [
    {
        "Name":"Ajith varma K",
        "Age":21,
        "Course":"MERN Stack",
        "is Completed":false
    },
        {
        "Name":"Yaswanth",
        "Age":22,
        "Course":"MERN Stack",
        "is Completed":false
    },
        {
        "Name":"Hari",
        "Age":25,
        "Course":"developer",
        "is Completed":true
    }
]

app.get("/student",(req,res)=>{
    res.send(data)
})

app.post("/get-student",(req,res)=>{
    console.log(req.body);
})

app.listen(3000,()=>{
    console.log("port 3000 is running")
})


// query & params 