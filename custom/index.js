// CORS => Cross Origin Resource Sharing

// Rest => Representational State Transfer => CRUD Applications with CRUD APIs

// C = Create
// R = Read
// U = Update
// D = Delete

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is Running");
});

// Write a file
app.post("/write", (req, res) => {
    const name = req.body.name;
    console.log(name);
    fs.writeFile('sample.txt', name, (err) => {
        if (err) {
            return res.status(500).json({
                error: "Couldn't write file"
            });
        }
        res.json({
            message: "File Written Successfully"
        });
    })
});

// Read a file
app.get("/read", (req, res) => {
    fs.readFile('sample.txt', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "File Not Found"
            })
        }
        res.json({
            content: data
        })
    })
});

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});