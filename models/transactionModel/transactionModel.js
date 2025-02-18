const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title : {
            type : String,
            required : true
        },
    amount : {
            type : Number,
            required : true
        },
    category : {
            type : String,
            required : true
        },
    date : {
<<<<<<< HEAD
            type : Date,  
            default : Date.now,
=======
<<<<<<< HEAD
            type : Date,
            default : Date.now()        
=======
            type : Date,  
            default : Date.now,
>>>>>>> 17749783fccab136c5e201c0458b70897a5068a0
>>>>>>> 3a53aa9 (File Uploaded)
        },
    description : String,
    path : {
        type : String,
        required : true
    },
});

const transactionModel = mongoose.model('transactions', transactionSchema);

module.exports = transactionModel;