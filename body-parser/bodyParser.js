const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


app.get("/form", (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Enter your name">
            <input type="number" name="age" placeholder="Enter your age">
            <button type="submit">Submit</button>
        </form>
    `);
});


app.post("/submit", (req, res) => {
    const { username, age } = req.body;

    res.send(`
        <h1>Form Received</h1>
        <p>Name: ${username}</p>
        <p>Age: ${age}</p>
    `);
});

app.listen(5000, () => {
    console.log("Server running on 5000");
});
