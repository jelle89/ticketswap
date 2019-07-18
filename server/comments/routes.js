const express = require("express");
const Comment = require("./model.js");
const router = express.Router();

router.post("/comments", function(req, res, next) {
  const id = req.params.id;
  const comment = {
    text: req.body.text,
    author: req.body.author
  };
  Comment.create(comment)
    .then(comment => res.status(201).json(comment))
    .catch(err => {
      next(err);
    });
});

router.delete("/comments", function(req, res, next) {
  Comment.destroy({
    where: { text: req.body.text }
  })
    .then(comment => {
      res.json({ comment: comment });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
