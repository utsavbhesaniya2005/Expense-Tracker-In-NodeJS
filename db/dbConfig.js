const db = require('mongoose');

db.connect('mongodb+srv://ukbhesaniya01:PiRcsU7u7FFISKRu@todocluster.m7llv.mongodb.net/').then(() => {

    console.log("Database Connected");
}).catch((err) => {
    
    console.log("Connection Error :- ", err);
});

module.exports = db;