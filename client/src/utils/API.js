import axios from "axios";

export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query}});
  },
  // Gets all articles
  getSavedArticles: function(SavedArticles) {
    return axios.get("/api/savedarticles",  );
  },
  // // Deletes the article with the given id
  // deleteSavedArticle: function(id) {
  //   return axios.delete("/api/savedarticles/" + id);
  // },
  // Saves a article to the database
  saveArticle: function(SavedArticleData) {
    return axios.post("/api/savedarticles", SavedArticleData);
  }

};
 
