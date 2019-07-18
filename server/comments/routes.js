const express = require("express");
const Comment = require("./model.js");
const router = express.Router();

router.post("/comments", function(req, res, next) {
  console.log("comment post ", req.body)
  const comment = {
    text: req.body.data.text,
    author: req.body.data.author
  };


  console.log("try to create", comment)
  Comment.create(comment)
    .then(comment => res.status(201).json(comment))
    .catch(err => {
      next(err);
    });
});

router.get('/comments', (req, res, next) => {
  console.log('hello from GET comments',req.params.id)
   
  Comment
  .findAll( )    ///{where: {ticketId: req.params.id }}) todo
    .then(comment => {
      res
        .status(200)
        .send(comment)
    }).catch(next)
})

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
