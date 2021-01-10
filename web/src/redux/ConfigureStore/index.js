import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Devs } from '../reducers/devs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { InitialFeedback } from './Forms';

export const ConfigureStore = () => {
    const store = createStore( combineReducers(
        {
            devs: Devs,
        }),applyMiddleware(thunk, logger)
        )
    
 
    console.log(store.getState());
    return store;
}