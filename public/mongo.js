const { MongoClient } = require('mongodb');

// Connection URL
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function connectDB() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Specify the database name
        const db = client.db("myDatabase");

        // Example: Access a collection
        const collection = db.collection("myCollection");

        // Example operation: Insert a document
        const result = await collection.insertOne({ name: "John Doe", age: 30 });
        console.log("Inserted Document:", result);

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        // Ensure the client is closed
        await client.close();
    }
}

connectDB();