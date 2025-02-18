const express = require('express');
const route = express.Router();
const controller = require('../controllers/routeControllers');
const upload = require('../middlewares/multer');

// Default Page Render
route.get('/', controller.default);

// Adding Expense Render
route.get('/add', controller.add);

// Edit Page
route.get('/edit/:id', controller.edit);

// Delete Expense
route.get('/delete/:id', controller.delete);


// Add Expense 
route.post('/addTransaction', upload.single('logo'), controller.addTransaction);

// Update Expense
route.post('/editTransaction/:id', upload.single('logo'), controller.editTransaction);

// Image Upload
// route.post('/fileUpload', upload.single('logo') , controller.fileUploads)

module.exports = route;