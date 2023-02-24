const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

const transactions = require("./controllers/transactions");

// - create a route `/` that says something like `welcome to the captain's log`
// - create a route `/logs` that shows the array of logs you've created
// - create a 404 route that when a user tries to access a route that doesn't exist, they will see this page

app.get("/", (req, res) => {
  res.send("This is the Budget App");
});

app.get("/404", (req, res) => {
  res.send("404: not found.");
});

app.use("/transactions", transactions);

// app.use("/transactions/:arrayIndex", transactions);

module.exports = app;
