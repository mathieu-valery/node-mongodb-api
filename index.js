const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const UserRoutes = require("./routes/users");
require("dotenv").config();

mongoDbUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDbUrl);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("open", (err) => {
  console.log("Database connected !");
});

// simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//api routes
app.use("/api/users", UserRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
