var express = require('express');
var router = express.Router();


var users  ={
  11: {
    id: 11, name: 'Mr. Nice'
  },
  12: {
    id: 12, name: 'Narco'
  },
  13: {
    id: 13, name: 'Bombasto'
  },
  14: {
    id: 14, name: 'Celeritas'
  },
  15: {
    id: 15, name: 'Magneta'
  },
  16: {
    id: 16, name: 'RubberMan'
  },
  17: {
    id: 17, name: 'Dynama'
  },
  18: {
    id: 18, name: 'Dr IQ'
  },
  19: {
    id: 19, name: 'Magma'
  },
  20: {
    id: 20, name: 'Tornado'
  }
};

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(Object.values(users));
});

router.get('/user/:id', function(req, res, next) {
  var id = req.params.id;
  if (users[id]) {
    res.json(users[id]);
  } else {
    res.status(404).send('user ' + id + ' does not exist');
  }
});

router.post('/user', function(req, res, next) {
  var newUser = req.body;
  var newUserId = newUser.id;
  if (users[newUserId]) {
    res.status(400).send('user ' + newUserId + ' already exists');
  } else {
    users[newUser.id] = newUser;
    res.json(users[newUser.id]);
  }
});

router.put('/user', function(req, res, next) {
  var newUser = req.body;
  var newUserId = newUser.id;
  if (users[newUserId]) {
    users[newUser.id] = newUser;
    res.json(users[newUser.id]);
  } else {
    res.status(400).send('user ' + newUserId + ' does not exist');
  }
});

router.delete('/user/:id', function(req, res, next) {
  var id = req.params.id;
  delete users[id];
  res.status(200).send('user ' + id + ' successfully deleted');
});

module.exports = router;
