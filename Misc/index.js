const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    console.log(user, password);
  res.send(`Hello ${user} Babuaa ! 😂`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    console.log(user, password);
  res.send(`Hello ${user} !`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
