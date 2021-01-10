import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import api from './services/api';

import {Provider} from "react-redux";
import {ConfigureStore} from '../src/redux/ConfigureStore';
import Setup from './components/Setup';


function App() { 

  //const[devs, setDevs] = useState([]);

    /*useEffect(() => {
        async function loadDevs(){
            const response = await api.get('/devs');
            setDevs(response.data);
           // console.log(response);
        } loadDevs();

    }, [ ]) ;

  const handleDevs = (newDev) =>{
    setDevs([...devs, newDev]);
  }*/
  return (
    <Provider store= {ConfigureStore()}>
        <div className="App" id="app">       
           <Setup/> 
        </div>
    </Provider>
  );
}; 
export default App;
