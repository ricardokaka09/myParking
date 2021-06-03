import  React,{ useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { Landing } from './src/navigation/homeStack';
import DrawerStack from './src/navigation/drawer';

import auth from '@react-native-firebase/auth'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './src/constants/store'
import { LOGIN_SUCCESS } from './src/constants/types';
import { loadUser } from './src/constants/actions/auth.action'


const Drawer = createDrawerNavigator();

const App =({isAuthenticated, user, loadUser}) => {
  useEffect(() => {
    console.log('active ------1');
    const onAuth = async() => {
      await auth().onAuthStateChanged((user) => {
        // console.log(user); 
        if(user){
          store.dispatch({
            type: LOGIN_SUCCESS,
            payload: user._user
          })
          console.log(user._user);
          
        }
      });
    } 
    onAuth()
   
    console.log(user);
  }, []);
  
  return (
    <NavigationContainer>
      {isAuthenticated? 
        <DrawerStack/> : 
        <Landing />
    }
      
    </NavigationContainer>
  );
}

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object.isRequired, 
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, { loadUser })(App)