var express = require("express");
var router = express.Router();

const HOTELS = [
  { id: 1, name: "Hilton BXL", stars: 4 },
  { id: 2, name: "Prestige", stars: 5 },
];

/* Read all hotels */
router.get("/", function (req, res, next) {
  return res.json(HOTELS);
});

/* Create an hotels */
router.post("/", function (req, res, next) {
  console.log("body", req.body); 
  if (!req.body || !req.body.name || !req.body.stars)
    return res.sendStatus(400);

  const newHotel = {
    id: HOTELS.length + 1,
    name: req.body.name,
    stars: req.body.stars,
  };

  HOTELS.push(newHotel);
  return res.json(newHotel);
});

module.exports = router;
