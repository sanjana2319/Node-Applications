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
        db.collection("tasks").findOne(
            { _id: new ObjectID("5f74dbb624fdaa22f0053399") },
            (error, task) => {
                console.log(task);
            }
        );
        db.collection("tasks")
            .find({ completed: false })
            .toArray((error, tasks) => {
                console.log(tasks);
            });
    }
);
