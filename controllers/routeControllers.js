const transactionModel = require('../models/transactionModel/transactionModel');

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
    
    const { title, desc, amount, category, date } = req.body; 
    
    let transaction = new transactionModel({
        title,
        desc,
        amount,
        category,
        date
    });
    
    transaction.save();

    console.log('Data Added.');
    
    res.redirect('/');
}

const editController = async (req, res) => {

    const transactionData = await transactionModel.findById(req.params.id)
    
    console.log("Data Finded.");

    res.render('editTransaction', { transactionData });
};

const editTransactionController = async (req, res) => {

    const { title, desc, amount, category, date } = req.body; 

    await transactionModel.findByIdAndUpdate(req.params.id, {
        title,
        desc,
        amount,
        category,
        date
    });

    console.log('Data Updated.');
    
    res.redirect('/');
}

const deleteController = async (req, res) => {

    await transactionModel.findByIdAndDelete(req.params.id);

    console.log('Data Deleted.');

    res.redirect('/');
}

module.exports = {
    default : defaultController,
    add : addController,
    addTransaction : addTransactionCotroller,
    edit : editController,
    editTransaction : editTransactionController,
    delete : deleteController
}