const express = require('express');
const app = express();
const port = 3002;
const bodyParsor = require('body-parser');
const path = require('path');
const db = require('./db/dbConfig');

const Route = require('./routes/transactionRoute');

app.set('view engine', 'ejs');
app.use(bodyParsor.urlencoded({ extended : true }));

// Static Path Setup
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', Route);

app.listen(port, (err) => {

    if(!err){
        
        console.log(`Server Runnig On ${port} : http://localhost:${port}`);
    }
});