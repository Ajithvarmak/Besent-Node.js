const express = require("express")

const app = express()

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

app.listen(3000,()=>{
    console.log("port 3000 is running")
})