var express = require('express');
var router = express.Router();

var data = [
  { id: 1, channel: "news", user: "author", message: "first post" },
  { id: 2, channel: "tech", user: "author", message: "first post" },
  { id: 3, channel: "tech", user: "jesse", message: "second post" }
];

/* GET all comments listing. */
router.get('/:channel/', function(req, res, next) {
  res.send(data.filter((element) => { return element.channel == req.params.channel }));
});

// get single comments
router.get('/:channel/:id', function(req, res, next) {
  var messages = data.filter((element) => { return element.channel == req.params.channel });

  res.send(messages.filter((element) => { return element.id == req.params.id })[0]);
});

// put a new message
router.put('/:channel/', function(req, res, next) {
  var newMessage = {
    user: req.body.user,
    message: req.body.message,
    id: data.length + 1,
    channel: req.params.channel
  };

  data.push(newMessage);
  res.send(data.filter((element) => { return element.channel == req.params.channel }));
});

// updated a message (post)
router.post('/:id', function(req, res, next) {
  res.send('updated a message by id');
});

// delete a message
router.delete('/:id', function(req, res, next) {
  res.send('deleted a message by id');
});


module.exports = router;
