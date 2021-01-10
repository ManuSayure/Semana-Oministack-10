import React from 'react';
import  Loading from '../components/Loading';
import { LoadingErrorDevs } from "../components/ErrorMessage";

 const RenderDev = ({errMess, isLoading, devs}) => {
     console.log({errMess, isLoading, devs})
    if (isLoading) {
        return( <Loading /> );
    }
    else if (errMess) {
        return(
            <LoadingErrorDevs errMess = { errMess} />           
        );
    }
    else if(devs!= null){
        return(
            devs.map(dev => {
                return (            
                      <li key={dev._id} className="dev-item">
                            <header>
                                <img src={ dev.avatar_url } alt={dev.name}/>
                                <div className="user-info">
                                        <strong>{dev.name}</strong>
                                        <span> {dev.techs.join(', ')} </span>
                                </div>
                            </header>
                            <p> {dev.bio}</p>
                            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                        </li>                
                 
                )
            })
        )
    }   
}; export default RenderDev;