const express = require("express");
const router = express.Router();
const User = require("../../models/User");

//ads model
const Ad = require("../../models/Ad");

// get /api/ads
router.get("/", (req, res) => {
  Ad.find()
    .sort({ date: -1 })
    .then((ads) => res.json(ads));
});

// get /api/ads/:id
router.get("/:id", (req, res) => {
  Ad.findById(req.params.id)
    .then((ad) => res.json(ad))
    .catch((err) => res.status(404).json({ success: false }));
});

// post /api/ads/
router.post("/", (req, res) => {
  const newAd = new Ad({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    owner: req.body.owner,
  });
  newAd.save().then((Ad) => res.json(Ad));
});

// delete /api/ads/:id
router.delete("/:id", (req, res) => {
  Ad.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});
// put /api/ads/:id
router.put("/:id", (req, res) => {
  Ad.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});
module.exports = router;
