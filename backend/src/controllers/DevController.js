const axios = require('axios');
const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');

//index, store, show, update, destroy  

module.exports =  {
    async index(req, res){

        const devs =  await Dev.find();
        console.log(devs);

        return res.json(devs);

    },
    async store(req, res){        
    
        const { github_username, techs, latitude, longitude } = req.body;

        //Checar se o registro já existe
        let dev = await Dev.findOne({github_username});
        if(!dev){
            apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);     
    
            const {name = login, avatar_url , bio } = apiResponse.data;
    
            const techsArray = techs.split(',').map((tech) => tech.trim())
    
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
        }       
        return(
            res.json(dev)
        );
    }
}