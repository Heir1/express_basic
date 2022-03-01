const express = require("express");
const path = require("path");

// init App
const app = express();

// Load View Enginr
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");



// Home Route
app.get("/", (req, res) => {
    let articles = [
        {
            id:1,
            title:'Article One',
            author:'Héritier nkele',
            body:'This is article one'
        },
        {
            id:2,
            title:'Article Two',
            author:'Héritier nkele',
            body:'This is article two'
        },
        {
            id:3,
            title:'Article Three',
            author:'Super Utanajiga',
            body:'This is article three'
        }
    ];
    res.render("index", {
        title: "Hello1",
        articles: articles
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