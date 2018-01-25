const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedarticleSchema = new Schema({
  id: { type: String, required: true },
  headline: { type: String },
  snippet: String,
  url: { type: String, required: true}
});

// const Article 
const SavedArticle = mongoose.model("SavedArticle", savedarticleSchema);

module.exports = SavedArticle;
// = Article
