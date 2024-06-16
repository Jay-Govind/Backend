const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded, { extended: true });

main()
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => {
		console.log(err);
	});
async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
	res.send("Hello World");
});

// Index Route
app.get("/chats", async (req, res) => {
	let chats = await Chat.find();
	// console.log(chats);
	res.render("index.ejs", { chats });
});

// New Route

// Create Route

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
