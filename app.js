const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodekb");
let db = mongoose.connection;

// Check connection

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
})
// init App
const app = express();

// Bring in Models
let Article = require("./models/article")

// Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");



// Home Route
app.get("/", (req, res) => {
    Article.find({}, (err, articles) => {
        err ? console.log(err) : 
        res.render('index', {
            title:'Articles',
            articles: articles
        });
    });
});

// Add Route
app.get("/articles/add", (reg, res) => {
    res.render("add_article", {
        title: "Add Article"
    })
});

// Start Server
app.listen(3000, () => {
    console.log("Server started on port 3000...");
});  