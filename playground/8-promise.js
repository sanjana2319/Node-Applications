// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Not Happening!");
//         resolve([2, 3, 5]);
//     }, 2000);
// });

// doWorkPromise
//     .then((result) => {
//         console.log("Success!", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     });

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

add(2, 3)
    .then((sum) => {
        console.log(sum);
        return add(sum, 2);
    })
    .then((sum2) => {
        console.log(sum2);
    })
    .catch((e) => {
        console.log(e);
    });
