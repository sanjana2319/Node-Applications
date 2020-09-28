setTimeout(() => {
    console.log("Two seconds are up!");
}, 2000);

const names = ["Sanjana", "Suraj", "Arvi"];
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0,
        };
        callback(data);
    }, 2000);
};
geocode("New Delhi", (data) => {
    console.log(data);
});

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         const result = a + b;
//         callback(result);
//     }, 2000);
// };

// add(1, 4, (sum) => {
//     console.log(sum); // Should print: 5
// });
