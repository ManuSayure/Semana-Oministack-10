//import {Router} from 'express';
const {Router} = require('express');

const {store, index}=  require('../src/controllers/DevController');
const SearchController = require('./controllers/SearchController');
const GithubAuthController = require('./controllers/GithubAuthController');

const routes = Router();

routes.post('/devs', store);
routes.get('/devs', index);

routes.get('/search', SearchController.index);
//routes.post('/authenticate', GithubAuthController.store );

module.exports = routes;