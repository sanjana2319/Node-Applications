const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Not Happening!");
        resolve([2, 3, 5]);
    }, 2000);
});

doWorkPromise
    .then((result) => {
        console.log("Success!", result);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
