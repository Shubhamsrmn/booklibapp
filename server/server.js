const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routesuser = require("./routes/users");
const routesbook = require("./routes/books");
require("dotenv").config();
app.use(cors()); // use for development else gives gives cors error (because of two servers live)
app.use(express.json()); // use for parsing body to json else gives underfined
async function connection() {
  try {
    const dbconn = await mongoose.connect(process.env.DBURl);
    console.log("connected" + dbconn.connection.host);
  } catch (error) {
    console.log("error");
  }
}
connection();
app.use(routesuser);
app.use(routesbook);
app.listen(5000, () => {
  console.log("Server started on 1337");
});
