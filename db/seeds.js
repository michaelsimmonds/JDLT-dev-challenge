const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Item = require('../models/item')

mongoose.connect('mongodb://localhost/myDb', (err, db) => {
  db.dropDatabase()

  Item.create([{
    supplier: 'New Co Ltd',
    product: 'Small Woggle',
    price: 4
  }, {
    supplier: 'New Co Ltd',
    product: 'Medium Woggle',
    price: 6
  }, {
    supplier: 'New Co Ltd',
    product: 'Large Woggle',
    price: 8
  },{
    supplier: 'New Co Ltd',
    product: 'Huge Woggle',
    price: 10
  },{
    supplier: 'Old Co Ltd',
    product: 'Small Woggle',
    price: 3
  },{
    supplier: 'Old Co Ltd',
    product: 'Medium Woggle',
    price: 5
  },{
    supplier: 'Old Co Ltd',
    product: 'Large Woggle',
    price: 7
  },{
    supplier: 'Old Co Ltd',
    product: 'Huge Woggle',
    price: 9
  }])
    .then(items => console.log(`${items.length} items created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
