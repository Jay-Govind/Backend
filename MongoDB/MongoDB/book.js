const mongoose = require("mongoose");

main()
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/book");
}

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
	},
	price: {
		type: Number,
	},
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
	title: "Maths XII",
	author: "R. D. Sharma",
	price: 1200,
});

book1
	.save()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
