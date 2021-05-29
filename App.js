import  React,{ useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { Landing } from './src/navigation/homeStack';
import DrawerStack from './src/navigation/drawer';

// import auth from '@react-native-firebase/auth'
import { auth1 } from './src/constants/firebase'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '532416373089-077m43e5aava4b65ro870bden6kcrlm8.apps.googleusercontent.com',
});

const Drawer = createDrawerNavigator();

export default function App() {
  const [initializing, setInitializing] =useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    auth1.onAuthStateChanged((user) => {
      console.log(user); 
      // setInitializing(true)
      if (user) {
        setInitializing(true)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
      } else {
        setInitializing(false)
      }
    });
  }, []);

  // if (initializing) return null;
  
  return (
    <NavigationContainer>
      {initializing? 
        <DrawerStack/> : 
        <Landing />
    }
      
    </NavigationContainer>
  );
}