import * as ActionTypes from '../ActionTypes/index';
import api from '../../services/api'; 

/** Adiciona um novo dev pelo form */
export const addDev = (dev) => ({
    type: ActionTypes.ADD_DEV,
    payload: dev
});

/** Busca os devs ja cadastrados no banco */
export const addDevs = (devs) => ({
  type: ActionTypes.ADD_DEVS,
  payload: devs
});
/** Chama api com metodo GET */
export  const getDevs = async () => (dispatch) => {

  dispatch(devsLoading(true));

  return api.get('/devs')
  .then(response => {
      if (response.ok) {
        console.log(response);
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(devs => dispatch(addDevs(devs)))
  .catch(error => dispatch(devsFailed(error.message)));
}

/** Devs ainda não carregados da api */
export const devsLoading = () => ({
  type: ActionTypes.DEVS_LOADING
});

/** Erro no carregamento dos devs */
export const devsFailed = (errmess) => ({
  type: ActionTypes.DEVS_FAILED,
  payload: errmess
});

/**Chama api com metodo POST */
export   const postDev = async (github_username, latitude, longitude, techs) => (dispatch) => {

  const newDev = {
      github_username: github_username,
      latitude: latitude,
      longitude: longitude,
      techs: techs
  };
 
  
  return  api.post('/devs', {
    github_username,
    techs,
    latitude,
    longitude    
 })
  .then(response => {
      if (response.ok) {
        console.log(response);
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addDev(response)))
  .catch(error =>  { console.log('post dev', error.message); alert('Your dev could not be posted\nError: '+error.message); });
};