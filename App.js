import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import HomeStackScreen from './src/navigation/homeStack';
import DrawerStack from './src/navigation/drawer';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export default function App() {
  const [user, setUser] = React.useState(false)
  const auth = (status) => {
    setUser(status)
    console.log(status)
  }
  return (
    <NavigationContainer>
      {user? 
        <DrawerStack/> : 
        <Login AUTH={auth}/>
        // <Register/>
    }
      
    </NavigationContainer>
  );
}