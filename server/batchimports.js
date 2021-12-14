const { MongoClient } = require("mongodb");
const { users } = require("./data/users");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  //   console.log(greetings);

  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("Project");

    await db.collection("users").insertMany(users);
    console.log("success");
  } catch (err) {
    console.log("err");
  }

  // close the connection to the database server
  client.close();
};
batchImport();
