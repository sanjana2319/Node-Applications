const fs = require("fs");

// const book = {
//     title: "I'ts good to be good",
//     author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const parseBook = JSON.parse(bookJSON);
// console.log(parseBook.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);

const currentData = fs.readFileSync("1-json.json");
const currentJSON = JSON.parse(currentData);
// const current = JSON.parse(currentJSON);

currentJSON.name = "Sanjana";
currentJSON.age = 21;

const newJSON = JSON.stringify(currentJSON);
fs.writeFileSync("1-json.json", newJSON);
