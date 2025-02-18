const express = require('express');
const app = express();
const port = 3003;
const bodyParsor = require('body-parser');
const path = require('path');
const db = require('./db/dbConfig');

const Route = require('./routes/transactionRoute');

app.set('view engine', 'ejs');
app.use(bodyParsor.urlencoded({ extended : true }));

// Static Path Setup
app.use(express.static(path.join(__dirname, '/public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', Route);

app.listen(port, (err) => {

    if(!err){
        
        console.log(`Server Runnig On ${port} : http://localhost:${port}`);
    }
});