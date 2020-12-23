 const express = require('express');
 const mongoose = require('mongoose');
 import {password} from './password.js';
 const app = express();
 mongoose.connect('mongodb+srv://admin:'+password+'@cluster0.e0g01.mongodb.net/db?retryWrites=true&w=majority');
  app.get('/', (req, res)=> {
      return(
          res.json({message:'Hello World'})
      );
  });
  app.listen(3333);