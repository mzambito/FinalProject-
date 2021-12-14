const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI, "anything");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updateLibrary = async (req, res) => {
  try {
    // Create a client
    const client = new MongoClient(MONGO_URI, options);

    //Connect to the client
    await client.connect();
    console.log("connected!");

    // Access the  project database
    const db = client.db("Project");

    // Get the email from req.query
    const { email, gameId } = req.query;

    // Create a query to find a user by email
    const query = { email };

    const updateLib = { $addToSet: { library: { gameId } } };

    const result = await db.collection("users").updateOne(query, updateLib);
    console.log(result);
    // Disconnect from the client
    client.close();
    console.log("disconnected");
    res.status(200).json({ status: 200, email, gameId });
  } catch (err) {
    console.log("ERROR OCCURED: ", err);
  }
};

module.exports = { updateLibrary };
