const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI, "anything");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addUserInfo = async (req, res) => {
  try {
    // Create a client
    const client = new MongoClient(MONGO_URI, options);

    //Connect to the client
    await client.connect();
    console.log("connected!");

    // Access the  project database
    const db = client.db("Project");

    // Get the email from req.query
    const { email, nickname, picture } = req.body;
    const userInfo = { email, nickname, picture, library: [] };

    // Create a query to find a user by email
    const query = { email };

    db.collection("users").findOne(query, async (err, result) => {
      if (result) {
        res
          .status(200)
          .json({ status: 200, result, message: "this user has an account" });
        // Disconnect from the client
        client.close();
        console.log("disconnected");
      } else {
        await db.collection("users").insertOne(userInfo);
        res.status(200).json({
          status: 200,
          email,
          message: "New account has been created",
        });
        // Disconnect from the client
        client.close();
        console.log("disconnected");
      }
    });
  } catch (err) {
    console.log("ERROR OCCURED: ", err);
  }
};

module.exports = { addUserInfo };
