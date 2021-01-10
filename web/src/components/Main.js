import React, { useEffect } from 'react';
import '../assets/css/Main.css';
import  RenderDev from "../components/RenderDev";

 const Main = ({devs, errMess, isLoading}) => { 
        
    return (
        <main>
            <ul>
                {   devs.map(dev => {
                        return (
                            <RenderDev 
                            dev = {dev} 
                            errMess= {errMess} 
                            isLoading = {isLoading} 
                            /> )
                    })                
                }               
            </ul>
        </main>
    )     

}; export default Main;