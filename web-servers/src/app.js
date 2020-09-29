const express = require("express");
const path = require("path");
const hbs = require("hbs");

// console.log(__dirname);
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../tempelates/views");
const partialsPath = path.join(__dirname, "../tempelates/partials");

const app = express();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.render("index", {
        name: "Sanjana",
        title: "Weather",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About us!",
        name: "Sanjana",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Need Help, Contact Us!",
        PhNo: "9989971586",
        email: "2319sanjana@gmail.com",
        name: "Sanjana",
    });
});

app.get("/weather", (req, res) => {
    res.send([
        {
            forecast: "It's raining",
            location: "Gulbarga",
        },
    ]);
});

app.get("help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Sanjana",
        errorMessage: "Help article not found",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Sanjana",
        errorMessage: "404 Page not found!",
    });
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
