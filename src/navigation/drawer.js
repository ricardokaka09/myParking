import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Login from '../screens/Login';
import HomeStackScreen from './homeStack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Drawer = createDrawerNavigator();

  
const DrawerStack = () => (
    <Drawer.Navigator
      drawerType='slide'
      
    >
      <Drawer.Screen 
      name="Home" 
      component={HomeStackScreen}
      // options={{
      //   // title: 'Home Page',
      //   headerStyle: { backgroundColor : '#6153FF'} 
      // }}
       />
      <Drawer.Screen
        name="Login"
        component={Login}
        
      />
    </Drawer.Navigator>
  );

export default DrawerStack

