const express = require("express");
const path = require("path");

// console.log(__dirname);
const publicPath = path.join(__dirname, "../public");

const app = express();
app.use(express.static(publicPath));

app.get("/weather", (req, res) => {
    res.send([
        {
            forecast: "It's raining",
            location: "Gulbarga",
        },
    ]);
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
