
import React, {useEffect} from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import { getDevs, postDev} from '../redux/ActionCreators';



const mapStateToProps = state => {
    return {
      devs: state.devs,      
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
   

class Setup extends React.Component{
  constructor(props){
    super(props);
    console.log(props); 
  };

  componentDidMount() {
    this.props.getDevs(); 
    //props.postDev();   
  };
      
 render(){
  return (
    <>
        <Sidebar postDev = {this.props.postDev}/>
        <Main 
          devs = {this.props.devs.devs}
          errMess = {this.props.devs.errMess}
          isLoading = {this.props.devs.isLoading}
        />
    </>
  )
 }
     
}; export default connect(mapStateToProps, mapDispatchToProps)(Setup);