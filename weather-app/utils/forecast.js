const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "https://api.darksky.net/forecast/485cfcf31eb3d1b3dfc7e2649b87be1b/" +
        encodeURIComponent(latitude) +
        "," +
        encodeURIComponent(longitude) +
        "?units=si";

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Check your internet connectivity!", undefined);
        } else if (response.body.error) {
            callback("Enter valid data", undefined);
        } else {
            callback(
                undefined,
                response.body.daily.data[0].summary +
                    " It is currently " +
                    response.currently.temperature +
                    "degress out. There is a " +
                    response.body.currently.precipProbability +
                    "% chance of rain"
            );
        }
    });
};

module.exports = forecast;
