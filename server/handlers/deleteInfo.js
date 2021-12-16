const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI, "anything");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteInfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = client.db("project");

    const result = await db.collection("users").deleteOne(req.body);
    res.status(204).json({ status: 204, data: req.body });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};
module.exports = { deleteInfo };
