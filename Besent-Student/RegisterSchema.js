const mongooes = require("mongoose")

const schemadata = new mongooes.Schema(
    {
        "Name":String,
        "Age":Number,
        "Course":String,
        "is Completed Course":Boolean
    }
)

const RegisterStudent = mongooes.model("besantstud",schemadata)

module.exports = RegisterStudent