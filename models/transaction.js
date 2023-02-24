// item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
// amount -number - the amount of the transaction
// date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// from - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.

module.exports = [
  {
    item_name: "income",
    amount: 3000,
    date: "02/11/23",
    from: "employer",
    category: "income",
  },
  {
    item_name: "savings",
    amount: 3000,
    date: "02/11/23",
    from: "bank",
    category: "savings",
  },
  {
    item_name: "cat food",
    amount: 50,
    date: "02/12/23",
    from: "petco",
    category: "pets",
  },
];
