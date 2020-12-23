//import {Router} from 'express';
const {Router} = require('express');
const {store}=  require('../src/controllers/DevController');

const routes = Router();

routes.post('/devs', store);

module.exports = routes;