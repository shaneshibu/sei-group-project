const User = require('../models/user')

function indexRoute(req, res, next) {
  User
    .find(req.query)
    .populate('user')
    .then(users => res.status(200).json(users))
    .catch(next)
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(user => {
      if (!user) throw new Error('Not Found')
      return res.status(200).json(user)
    })
    .catch(next)
}

<<<<<<< HEAD
// function createRoute(req, res, next) {
//   req.body.user = req.currentUser
//   User
//     .create(req.body)
//     .then(user => res.status(201).json(user))
//     .catch(next)
// }
=======
function createRoute(req, res, next) {
  req.body.user = req.currentUser
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}
>>>>>>> development

function editRoute(req, res , next) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')
      if (!user.user.equals(req.currentUser._id)) throw new Error('Unauthorized')
      Object.assign(user, req.body)
      return user.save()
    })
    .then(user => res.status(202).json(user))
    .catch(next)
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user.user.equals(req.currentUser._id)) throw new Error('Unauthorized')
      return user.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}


module.exports = {
  index: indexRoute,
  show: showRoute,
<<<<<<< HEAD
=======
  create: createRoute,
>>>>>>> development
  edit: editRoute,
  delete: deleteRoute
}
