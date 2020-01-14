const { Router } = require('express')
const bcrypt = require('bcrypt')
const Users = require('./model')

const router = new Router()

// FOR TESTING PURPOSES
router.get("/users", (_request, response, next) => {
  Users.findAll()
    .then(users => {
      response.send(users);
    })
    .catch(next);
});

router.post('/signup', (request, response, next) => {
  const { fullName, username, password } = request.body;
  if (!fullName || !username || !password) {
    response.status(400).send({
      message: 'Please supply a valid username and password'
    })
  }
  const user = {
    fullName,
    username,
    password: bcrypt.hashSync(request.body.password, 10)
  }
  Users
    .create(user)
    .then(user => {
      request.user = user
      response.send({ message: "Account created" })
    })
    .catch(next)
})
module.exports = router