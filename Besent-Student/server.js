const express = require("express");
const connectdb = require("./config_db");
const RegisterSchema = require("./RegisterSchema");

const student = express();

student.use(express.json());

connectdb();

student.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const reg = new RegisterSchema(body);
        const result = await reg.save();
        res.status(200).json({
            Message: "Data Received",
            Data: result,
        });
    } catch (err) {
        res.send(err);
    }
});

student.get("/students", async (req, res) => {
    try {
        let checker = req.query.Name;
        if (checker) {
            let getstud = await RegisterSchema.find({ Name: checker });
            res.send({
                data: getstud,
            });
        } else {
            let getstud = await RegisterSchema.find();
            res.send({
                data: getstud,
            });
        }
    } catch (err) {
        res.send(err);
    }
});

student.get("/students/:Name", async (req, res) => {
    try {
        let checker = req.params.Name;
        if (checker) {
            let getstud = await RegisterSchema.find({ Name: checker });
            res.send({
                data: getstud,
            });
        } else {
            let getstud = await RegisterSchema.find();
            res.send({
                data: getstud,
            });
        }
    } catch (err) {
        res.send(err);
    }
});

student.listen(2000, () => {
    console.log("Port 2000 Running");
});
