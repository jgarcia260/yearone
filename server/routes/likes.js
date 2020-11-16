const express = require('express');
const likesController = require('../controllers/likes.js');
const router = express.Router();

router.post('/:movie_id', (req, res) => {
  let { voteType } = req.body;
  let { movie_id } = req.params;
  if (voteType === 'upvote') {
    likesController.upvote({ movie_id }, (err, result) => {
      if (err) {
        return res.status(500);
      }
      return res.sendStatus(201);
    });
  } else {
    likesController.downvote({ movie_id }, (err, result) => {
      if (err) {
        return res.sendStatus(500);
      }
      return res.sendStatus(201);
    });
  }
});

module.exports = router;
