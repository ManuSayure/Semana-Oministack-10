import React, { useEffect } from 'react';
import '../assets/css/Main.css';
import  RenderDev from "../components/RenderDev";

 const Main = ({devs, errMess, isLoading}) => { 
     console.log({devs, errMess, isLoading});
        
    return (
        <main>
            <ul>
                
                    <RenderDev 
                    devs = {devs} 
                    errMess= {errMess} 
                    isLoading = {isLoading} 
                    />               
                             
                             
            </ul>
        </main>
    )     

}; export default Main;