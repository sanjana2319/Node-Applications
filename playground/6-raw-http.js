const https = require("https");

const url =
    "https://api.darksky.net/forecast/485cfcf31eb3d1b3dfc7e2649b87be1b/37, -122";

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});
request.on("error", () => {
    console.log("An error", error);
});
request.end();
