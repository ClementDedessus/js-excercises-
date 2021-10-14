var express = require("express");
const { Films } = require("../model/films");

var router = express.Router();
const filmModel = new Films();

// GET /films : read all the films from the menu
router.get("/", function (req, res) {
  console.log("GET /films");
  return res.json(filmModel.getAll());
});

// GET /films/{id} : Get a film from its id in the menu
router.get("/:id", function (req, res) {
  console.log(`GET /films/${req.params.id}`);

  const film = filmModel.getOne(req.params.id);
  // Send an error code '404 Not Found' if the film was not found
  if (!film) return res.status(404).end();

  return res.json(film);
});

// POST /filmss : create a film to be added to the menu.
router.post("/", function (req, res) {
  console.log("POST /films");

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  const film = filmModel.addOne(req.body);

  return res.json(film);
});

// DELETE /films/{i} : delete a film from the menu
router.delete("/:id", function (req, res) {
  console.log(`DELETE /films/${req.params.id}`);

  const film = filmModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the film was not found
  if (!film) return res.status(404).end();
  return res.json(film);
});

// PUT /films/{id} : update a film at id
router.put("/:id", function (req, res) {
  console.log(`PUT /films/${req.params.id}`);
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  const film = filmModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the film was not found :
  if (!film) return res.status(404).end();
  return res.json(film);
});

module.exports = router;
