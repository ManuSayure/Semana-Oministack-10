
import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import { getDevs, postDev} from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      dishes: state.devs,      
    }
  }
  const mapDispatchToProps = dispatch => {
      return{   
             getDevs: () => { dispatch(getDevs())}, 

             postDev: (github_username, latitude, longitude, techs)  => {
                dispatch(postDev(github_username, latitude, longitude, techs))
              }, 
                   
      }
  }
  

const Setup = (props) => {
    console.log(props);

    useEffect(() => {
       props.getDevs();
       props.postDev();
       }, []
   );  

     return (
        <>
            <Sidebar postDev = {props.postDev}/>
            <Main/>
        </>
     )
}; export default connect(mapStateToProps, mapDispatchToProps)(Setup);