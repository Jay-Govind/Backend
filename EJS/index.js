const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let dicVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dicVal });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  let data = instaData[username];
  if (!data) {
    res.render("error.ejs");
  } else {
    res.render("instagram.ejs", { data });
  }
});

app.listen(8080, () => {
  console.log(`App is listen on the port - 8080`);
});
