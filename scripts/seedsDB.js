const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytimes-react-14",
  // {
  //   useMongoClient: true
  // }
);

const savedarticleSeed = [
  {
    id: "8675309",
    headline: "Demo Article",
    snippet: "Demo Text",
    url: 'www.demowebsite.com'
  }

];

db.SavedArticle
  .remove({})
  .then(() => db.SavedArticle.collection.insert(savedarticleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
