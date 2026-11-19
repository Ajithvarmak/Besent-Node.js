const mongooes = require("mongoose")

const registerschema = new mongooes.Schema(
    {
        Name:String,
        Age:Number,
        Phone:String
    }
)

const registerStudent = mongooes.model("RegisterStud",registerschema)

module.exports = registerStudent()