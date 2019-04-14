const router = require('express').Router()
const itemsController = require('../controllers/items')

router.route('/items')
  .get(itemsController.index)

module.exports = router
