import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Login from '../screens/Login';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        headerLeft: () => ((
          <TouchableOpacity>
              <Icon 
                name="reorder-three-outline"
                size={30}
              />
          </TouchableOpacity>
          
          // <Button
          //   onPress={() => alert('This is a button!')}
          //   title="Info"
          //   // color="#fff"
          // />
        )),
      }} />
      <HomeStack.Screen
        name="Login"
        component={Login}
        
      />
    </HomeStack.Navigator>
  );

export default HomeStackScreen

