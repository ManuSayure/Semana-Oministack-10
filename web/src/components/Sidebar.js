import React, {useEffect, useState} from 'react';
import '../assets/css/Sidebar.css';
import api from '../services/api'; 

const Sidebar = (props) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
   
    


     useEffect(() => {
         navigator.geolocation.getCurrentPosition(
             (position) => {
               const {latitude, longitude} = position.coords;
               setLatitude(latitude);
               setLongitude(longitude);
             }, 
             (err) =>{
                 console.log(err);
             },
             {
                 timeout: 30000,
             }
         );
     }, [])

     
     async function handleSubmit(e){
         e.preventDefault();
         const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude    
         });
         setGithub_username('');
         setTechs(''); 
         props.handleDevs(response.data);
         console.log(response.data);
         
     }
    return(
        <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
            <div  className='input-block'>
                <label>Usuário Github</label>
                <input 
                    type='text'
                    name= 'github_username'  
                    id='github_username' 
                    required 
                    value={github_username}
                    onChange={(e) => setGithub_username(e.target.value)}/> 
            </div>
           
            <div className='input-block'>
                <label>Tecnologias</label>
                <input 
                    name= 'techs' 
                    type='text' 
                    id='techs' 
                    required
                    value={techs}
                    onChange={(e)=>setTechs(e.target.value)}    
                
                />
            </div>
              
            <div className='input-group'>

                <div className="input-block">
                    <label>Latitude</label>
                    <input 
                        type='number' 
                        name= 'latitude'  
                        id='latitude' 
                        required 
                        value = {latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />   
                </div>

                <div className="input-block">
                    <label>Longitude</label>
                    <input 
                        type='number' 
                        name= 'longitude'  
                        id='longitude' 
                        required 
                        value = {longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />  
                </div>             
                
            </div>
            <button type='submit'>Salvar</button>
            
        </form>
    </aside>
    );
    
    

}; export default Sidebar;