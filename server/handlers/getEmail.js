const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getEmail = async (req, res) => {
  try {
    // Create a client
    const client = new MongoClient(MONGO_URI, options);

    //Connect to the client
    await client.connect();
    console.log("connected!");

    // Access the  project database
    const db = client.db("Project");

    // Get the email from req.query
    const { email } = req.query;

    // Create a query to find a user by email
    const query = { email };

    db.collection("users").findOne(query, (err, result) => {
      // Disconnect from the client
      client.close();
      console.log("disconnected");

      result
        ? res.status(200).json({ status: 200, _id, data: result })
        : res.status(404).json({ status: 404, _id, data: "Not Found" });
      client.close();
    });
  } catch (err) {
    console.log("ERROR OCCURED: ", err);
  }
};

module.exports = { getEmail };
