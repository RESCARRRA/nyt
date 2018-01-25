const axios = require("axios");
const router = require("express").Router();
const articlesController = require("./../controllers/articlesController");


router.get("/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=024c3c3a2ca64d87a2c72625ee22605c&", {params: req.query})
    .then(({ data: { response } }) => res.json(response.docs))
    .catch(err => res.status(422).json(err));
});

router.get("/savedarticles", (req, res) => {
  axios
    .get(articlesController.findAll)
    .then(({ data: { response } }) => res.json(response.docs))
    .catch(err => res.status(422).json(err));
});

router.post("/savedarticles", (req, res) => {
  axios
  	.post(articlesController.create)
});


module.exports = router;

		 // {'api-key':'024c3c3a2ca64d87a2c72625ee22605c?', 