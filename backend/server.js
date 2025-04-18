require("dotenv").config();
const mongoose = require("mongoose")
const app = require("./app");


// Connecting to DATABASE ->>
const DB = process.env.MONGO_CLIENT_URI.replace(
	'<db_password>',
	process.env.MONGO_CLIENT_PASSWORD
);

mongoose
	.connect(DB, {
		// <- Using Mongoose Connection
		// useNewUrlParser: true,
		// useCreateIndex: true,
		// useFindAndModify: false,
		// useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB connection established');
	})
	.catch((err) => {
		console.log("DB cCONNECTION ERROR: " + err.message);

	});

// Catching uncaught exception ->>
process.on("unCaughtException", (err) => {
	console.log(`UNCAUGHT EXCEPTION -> ${err.name} - ${err.message}`);
	console.log("App SHUTTING DOWN...");
	process.exit(1); // <- Then will shut down the server.
});

// Catching unHandleled Rejections ->
process.on("unhandledRejection", (err) => {
	console.log(`UNHANDELLED REJECTION -> ${err.name} - ${err.message}`);
	console.log(err);
	console.log("App SHUTTING DOWN...");
	server.close(() => {
		// <- This will first terminate all requests

		process.exit(1); // <- Then will shut down the server.
	});
});

const DB_CON = mongoose.connection
const PORT = process.env.PORT || 8000;
/*console.log("✅ Registered Routes:");
app._router.stack.forEach((middleware) => {
	if (middleware.route) {
		console.log("✅", middleware.route.path);
	} else if (middleware.name === "router") {
		middleware.handle.stack.forEach((handler) => {
			if (handler.route) {
				console.log("✅", handler.route.path);
			}
		});
	}
});*/

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = DB_CON
