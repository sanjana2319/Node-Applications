const express = require("express");
const path = require("path");
const hbs = require("hbs");
const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../tempelates/views");
const partialsPath = path.join(__dirname, "../tempelates/partials");

const app = express();
const port = process.env.PORT || 3000;

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
    if (!req.query.address) {
        return res.send({
            error: "Give an address",
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, place } = {}) => {
        if (error) {
            return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                place,
                address: req.query.address,
            });
        });
    });
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "Use search term",
        });
    }
    console.log(req.query.search);
    res.send({
        product: [],
    });
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

app.listen(port, () => {
    console.log("Server running at port " + port);
});
