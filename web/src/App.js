import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import api from './services/api';


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
    <div className="App" id="app"> 

     <Sidebar handleDevs={(newDev ) => handleDevs(newDev)}/>
     <Main devs={devs}/>

    </div>
  );
}; 
export default App;
