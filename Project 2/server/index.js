const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoModel = require("./models/Todo");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// Database Connection
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to Database'))
    .catch((error) => console.log('Error Connecting to Database: ', error));

app.get('/', (req, res) => {
    res.send("Server is Running");
});

// Create Todo
app.post('/create', async (req, res) => {
    // Grab Data from Frontend
    const getTitle = req.body.title;
    const getDescription = req.body.description;

    // Creating a new Object
    const todo = new todoModel({
        title: getTitle,
        description: getDescription,
    });

    // Save data to DB
    try {
        await todo.save();
        res.send("Todo Created Successfully");
    } catch (error) {
        console.log("Error: ", error);
    }

});

// Get Todo
app.get('/get', async (req, res) => {
    // {} use karne se sara data aayega. Particular data chahiye toh use $where
    todoModel.find({})
        .then((data) => res.send(data))
        .catch((error) => res.send(error));
});

// Delete Todo
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await todoModel.findByIdAndDelete(id).exec();
    res.send("Todo Deleted");
});

// Update Todo
app.put("/update/:id", async (req, res) => {
    const { newTitle, newDescription } = req.body;
    const id = req.params.id;

    try {
        const todo = await todoModel.findById(id);
        if (!todo) {
            return res.status(404).send("Todo Not Found");
        }
        todo.title = newTitle;
        todo.description = newDescription;
        await todo.save();
        res.status(200).send(todo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});