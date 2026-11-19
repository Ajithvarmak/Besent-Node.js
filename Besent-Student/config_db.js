const mongooes = require("mongoose")

const connectdb = async ()=>{

    try{
        await mongooes.connect("mongodb://localhost:27017/besantStudents")
        console.log("db is connect")

    }catch(err){
        console.log(err,"db error")
    }

}

module.exports = connectdb