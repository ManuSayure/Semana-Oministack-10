 const express = require('express');
 const mongoose = require('mongoose');
 const port = '3333';
 const password = require('../password.js') ;
 const routes = require('./routes');

 const app = express(); 

 //Mongo DB Atlas
 mongoose.connect('mongodb+srv://admin:'+password+'@cluster0.e0g01.mongodb.net/db?retryWrites=true&w=majority', {   
        useUnifiedTopology: true,
        useNewUrlParser: true 
});

 app.use(express.json());
 app.use(routes);
 
 app.listen(port, function () {
    console.log(`app listening on port http://localhost:${port}`)
  });