const mongoose = require("mongoose");

main()
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

const User = mongoose.model("User", userSchema);

User.deleteOne({ name: "Jay" })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// User.updateOne({ name: "Alok" }, { age: 22 })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// User.find({age: {$gt: 18}})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// User.insertMany([
// 	{ name: "Raj", email: "raj@gmail.com", age: 18 },
// 	{ name: "Alok", email: "alok@gmail.com", age: 25 },
// 	{ name: "Navya", email: "navya@gmail.com", age: 20 },
// 	{ name: "Tanya", email: "tanya@gmail.com", age: 18 },
// ]).then((res) => {
// 	console.log(res);
// });

// const user2 = new User({
// 	name: "Govind",
// 	email: "jay@gmal.com",
// 	age: 20,
// });

// user2
// 	.save()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
