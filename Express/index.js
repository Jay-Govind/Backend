const express = require("express");
const app = express();

// Routing
// app.use((req, res) => {
//   res.send("Hello World");
// });

app.get("/home", (req, res) => {
  res.send("Hello ! I am Home Page");
});

// Path Parameters
app.get("/home/:user/:id", (req, res) => {
  let { user, id } = req.params;
  let str = `<h1>Hello ! @${user}, <u>your id is ${id}</u></h1>`;
  res.send(str);
});

// Query Parameters
app.get("/search", (req, res) => {
  let { q } = req.query;
  let str = `Search Result for <h3>${q}</h3>`;
  res.send(str);
});

// for all routes
app.use("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(8080, () => {
  console.log(`App is listing on the port 8080`);
});
