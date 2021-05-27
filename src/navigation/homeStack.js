import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Login from '../screens/Login';
import Payment from '../screens/Payment';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Register from '../screens/Register';
// import Icon from '@mdi/react';
// import { mdiAccount } from '@mdi/js';

const HomeStack = createStackNavigator();
// const Stack = createStackNavigator();
// function StackScreen() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={({ navigation, route }) => ({
//             headerTitle: 'Dang Cong Hungw',
//           })}
//         />
//       </Stack.Navigator>
//     );
//   }
  
const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen 
      name="Home" 
      component={Home}
      options={{
        title: 'Home Page',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor : '#6153FF'},
        headerRight: () => (
          <TouchableOpacity style={{marginRight: 10}}>
            <Icon
              name="heart-outline"
              size={30}
            />
          </TouchableOpacity>
        ),
      }} />
      <HomeStack.Screen
        name="Register"
        component={Register}
        
      />
      <HomeStack.Screen
        name="Login"
        component={Login}
        
      />
      
      <HomeStack.Screen
      name="Payment"
      component={Payment}
      options={{
        title: `Thanh Toan Bãi bạch Đằng`,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#6153FF'},
        headerRight: () => (
          <TouchableOpacity style={{marginRight: 10}}>
            <Icon name="heart-outline" size={30} />
          </TouchableOpacity>
        ),
      }}
    />
    </HomeStack.Navigator>
  );

export default HomeStackScreen

