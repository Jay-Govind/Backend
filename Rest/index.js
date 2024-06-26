const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Sample Data
let posts = [
  {
    id: uuidv4(),
    username: "Jay",
    content: "I love Coding",
  },
  {
    id: uuidv4(),
    username: "Navya",
    content: "I got my first internship",
  },
  {
    id: uuidv4(),
    username: "Alok",
    content: "I love Web Development",
  },
];

// Index Route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// New Route
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// show Route
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  if (!post) {
    // Handle case where post is not found
    return res.status(404).send("Post not found");
  }
  res.render("show.ejs", { post });
});

// Update Route
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((post) => post.id === id);
  if (!id) {
    return res.status(404).send("Page not found");
  }
  post.content = newContent;
  res.redirect(`/posts/${id}`);
});

// Edit Route
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

// Delete Route
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});

app.listen(8080, () => console.log("Server Start"));
