const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { users } = require("./data/users");

const batchImport = async () => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  //   console.log(greetings);

  try {
    // connect to the client
    await client.connect();
    console.log("connected");

    // connect to the database
    const db = client.db("Project");
    console.log(users);

    await db.collection("users").insertMany(users);
    console.log("success");
    client.close();
    console.log("disconnected");
  } catch (err) {
    console.log(err);
  }

  // close the connection to the database server
};
batchImport();
