const express = require('express');
const route = express.Router();
const controller = require('../controllers/routeControllers');

route.get('/', controller.default);

route.get('/add', controller.add);

route.get('/edit/:id', controller.edit);

route.get('/delete/:id', controller.delete);



route.post('/addTransaction', controller.addTransaction);

route.post('/editTransaction/:id', controller.editTransaction);

module.exports = route;