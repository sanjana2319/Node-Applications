const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to database");
            console.log("MongoDB connected successfully!");
        }

        const db = client.db(databaseName);

        // db.collection("users").findOne(
        //     { _id: new ObjectID("5f74d5d2f4af77211064b543") },
        //     (error, user) => {
        //         if (error) {
        //             return console.log("Unable to find");
        //         }
        //         console.log(user);
        //     }
        // );
        // db.collection("users")
        //     .find({ age: 21 })
        //     .toArray((error, user) => {
        //         console.log(user);
        //     });
        // db.collection("tasks").findOne(
        //     { _id: new ObjectID("5f74dbb624fdaa22f0053399") },
        //     (error, task) => {
        //         console.log(task);
        //     }
        // );
        // db.collection("tasks")
        //     .find({ completed: false })
        //     .toArray((error, tasks) => {
        //         console.log(tasks);
        //     });

        // db.collection("users")
        //     .updateOne(
        //         {
        //             _id: new ObjectID("5f74d5c15e6a001874661213"),
        //         },
        //         {
        //             $inc: {
        //                 age: 2,
        //             },
        //         }
        //     )
        //     .then((result) => {
        //         console.log(result.modifiedCount);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // db.collection("tasks")
        //     .updateMany(
        //         {
        //             completed: false,
        //         },
        //         {
        //             $set: {
        //                 completed: true,
        //             },
        //         }
        //     )
        //     .then((result) => {
        //         return console.log(result.modifiedCount);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // db.collection("users")
        //     .deleteMany({
        //         age: 21,
        //     })
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((error) => {
        //         console.log(errror);
        //     });

        db.collection("tasks")
            .deleteOne({
                name: "Lorean",
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
);
