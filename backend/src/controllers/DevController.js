const axios = require('axios');
const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

//index, store, show, update, destroy  

module.exports =  {
    async index(req, res){

        const devs =  await Dev.find();
       // console.log(devs);

        return res.json(devs);

    },
    async store(req, res){        
    
        const { github_username, techs, latitude, longitude } = req.body;
        //console.log(req.body);

        //Checar se o registro já existe
        let dev = await Dev.findOne({github_username});
       // console.log(dev);
        if(!dev){
            apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);     
    
            const {name = login, avatar_url , bio } = apiResponse.data;
    
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsArray,
                location,
        
            });
            // Filtrar as conexões  que estão em no máximo 10km de distância 
            // e que o novo dev tenha pelo menos umas das tecnologias filtradas.
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )
            sendMessage(sendSocketMessageTo, 'newDev', dev)
           // console.log(sendSocketMessageTo); 
        }       
        return(
            res.json(dev)
        );
    }
}