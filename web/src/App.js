import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import api from './services/api';

import {Provider} from "react-redux";
import {ConfigureStore} from '../src/redux/ConfigureStore';


function App() { 

  const[devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs(){
            const response = await api.get('/devs');
            setDevs(response.data);
            console.log(response);
        } loadDevs();

    }, [ ]) ;

  const handleDevs = (newDev) =>{
    setDevs([...devs, newDev]);
  }
  return (
    <Provider store= {ConfigureStore()}>
        <div className="App" id="app"> 
      
            
        </div>
    </Provider>
  );
}; 
export default App;
