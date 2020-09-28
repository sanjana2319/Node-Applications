const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "https://api.darksky.net/forecast/485cfcf31eb3d1b3dfc7e2649b87be1b/" +
        encodeURIComponent(latitude) +
        "," +
        encodeURIComponent(longitude) +
        "?units=si";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Check your internet connectivity!", undefined);
        } else if (body.error) {
            callback("Enter valid data", undefined);
        } else {
            callback(
                undefined,
                body.daily.data[0].summary +
                    " It is currently " +
                    body.currently.temperature +
                    "degress out. There is a " +
                    body.currently.precipProbability +
                    "% chance of rain"
            );
        }
    });
};

module.exports = forecast;
