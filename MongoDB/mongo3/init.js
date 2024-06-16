const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChats = [
	{
		from: "Jay",
		to: "Alok",
		msg: "Hello, I will provide you data as soon as possible",
		created_at: new Date(),
	},
	{
		from: "Navya",
		to: "Sakshi",
		msg: "Hello, Teach me basics of C++",
		created_at: new Date(),
	},
	{
		from: "Govind",
		to: "Shubham",
		msg: "Hello, Plan Your Day",
		created_at: new Date(),
	},
	{
		from: "Preet",
		to: "Ashish",
		msg: "Hello, Let's Play",
		created_at: new Date(),
	},
	{
		from: "Jay",
		to: "Sakshi",
		msg: "Hello, What are you doing ?",
		created_at: new Date(),
	},
];

Chat.insertMany(allChats);