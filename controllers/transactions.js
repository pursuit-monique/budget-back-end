const express = require("express");
const transactions = express();

const model = require("../models/transaction");

transactions.use(express.json());

// 1	Index	/transactions	GET	Read	Get a list (or index) of all transactions
// 2	Show	/transactions/:id GET	Read	Get an individual view (show one transactions)
// 3	Create	/transactions	POST	Create	Create a new transactions
// 4	Destroy	/transactions/:id	DELETE	Delete	Delete a transactions
// 5	Update	/transactions/:id	PUT	Update	Update a transactions

transactions.get("/", (req, res) => {
  // Index page
  res.send(model);
});

transactions.get("/:id", (req, res) => {
  // Show page
  !!model[req.params.id] ? res.send(model[req.params.id]) : res.redirect("404");
});

transactions.post("/", (req, res) => {
  // Create new transaction
  model.push(req.body);
  res.json(model[model.length - 1]);
});

transactions.delete("/:id", (req, res) => {
  // Destroy Transaction record
  const rmtransaction = model.splice(req.params.id, 1);
  res.status(200).json(rmtransaction);
});

transactions.put("/:id", async (req, res) => {
  // Update a transaction record
  if (model[req.params.id]) {
    model[req.params.id] = req.body;
    res.status(200).json(model[req.params.id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
