const transactionModel = require('../models/transactionModel/transactionModel');
const fs = require('fs');

const defaultController = async (req, res) => {

    console.log("Default Page");
    
    const transactionData = await transactionModel.find(); 

    res.render('index', { transactionData });
};

const addController = (req, res) => {
    
    console.log('Add Transaction Page');
    
    res.render('addTransaction');
}

const addTransactionCotroller = (req, res) => {
    
    let { title, description, amount, category, date } = req.body; 
    let { path } = req.file;
    
    let transaction = new transactionModel({
        title,
        amount,
        category,
        date,
        description,
        path
    });
    
    transaction.save();

    console.log('Data Added.');
    
    res.redirect('/');
}

const editController = async (req, res) => {

    const transactionData = await transactionModel.findById(req.params.id);
    
    console.log("Data Finded.");

    res.render('editTransaction', { transactionData });
};

const editTransactionController = async (req, res) => {

    let data = {
        ...req.body, path : req.file.path
        // path : req.file ? req.file.path : ''
    }

    await transactionModel.findByIdAndUpdate(req.params.id, data);

    console.log('Data Updated.');
    
    res.redirect('/');
}

const deleteController = async (req, res) => {

    let deletedData = await transactionModel.findById(req.params.id);

    let localDelete = deletedData.path; 
    
    fs.unlink(`${localDelete}`, (err) => {
        
        console.log('Image Delete From Local Database.');
    });

    console.log('Data Deleted.');

    res.redirect('/');
}

const fileUploads = (req, res) => {
    
    console.log('File', req.file);
    res.redirect('/addTransaction');
}

module.exports = {
    default : defaultController,
    add : addController,
    addTransaction : addTransactionCotroller,
    edit : editController,
    editTransaction : editTransactionController,
    delete : deleteController,
    fileUploads
}