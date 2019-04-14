const Item = require('../models/item')

function indexRoute(req, res) {
  Item
    .find()
    .then(items => res.status(200).json(items))
}

module.exports = {
  index: indexRoute
}
