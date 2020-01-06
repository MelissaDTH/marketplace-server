const { Router } = require('express')
const bcrypt = require('bcrypt')
const Users = require('./model')

const router = new Router()

// FOR TESTING PURPOSES
router.get("/users", (_req, res, next) => {
  Users.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  const { fullName, username, password } = req.body;
  if (!fullName || !username || !password) {
    res.status(400).send({
      message: 'Please supply a valid username and password'
    })
  }
  const user = {
    fullName,
    username,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  Users
    .create(user)
    .then(user => {
      req.user = user
      res.send({ message: "Account created" })
    })
    .catch(next)
})
module.exports = router