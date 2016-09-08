var router = require('koa-router')();

// === Hardcoded Data === //

// TODO: make an index.js data, also move this to an actual database
var categories  = require('../data/categories');
var products    = require('../data/products');

// === REST API Endpoints === //

router.get('/api/rootcategories', function *() {
  this.body = categories;
});

router.get('/api/products', function *() {
  this.body = products;
});

module.exports = router;
