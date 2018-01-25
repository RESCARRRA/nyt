const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
	// ** USE for mongodb **
	// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
app.use("/api", apiRoutes);

	// ** USE for mongodb **
	// app.use(routes);

// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/nytimes-react-14",
//   // {
//   //   useMongoClient: true
//   // }
// );

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

///**********///
