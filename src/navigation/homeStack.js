import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Login from '../screens/Login';
import Payment from '../screens/Payment';
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Register from '../screens/Register';
import createTopTabs from './materialTop'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import History from '../screens/History';
import Like from '../screens/Like';
import IconItem from '../components/IconItem';
// import Icon from '@mdi/react';
// import { mdiAccount } from '@mdi/js';

const HomeStack = createStackNavigator();
const LandingStack = createStackNavigator();
const Landing = () =>{

  return (
    <LandingStack.Navigator initialRouteName="Login">
      <LandingStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Đăng Nhập',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor : '#6153FF'},
          headerTintColor: '#fff',
        }}
      />
       
      <LandingStack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Đăng Kí',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor : '#6153FF'},
          headerTintColor: '#fff',
        }}
      />
    </LandingStack.Navigator>
  )
} 
  
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen 
      name="Home" 
      component={Home}
      options={{
        title: 'Home Page',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor : '#6153FF'},
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.navigate('Notifications')}>
            <Icon
              name="bell-ring"
              size={25}
              color= '#fff'
            />
          </TouchableOpacity>
        ),
      }} />
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
        
      }}
    />
      <HomeStack.Screen
      name="Like"
      component={Like}
      options={{
        title: `YÊU THÍCH`,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#6153FF'},
        headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
                style={{marginLeft: 10, alignSelf: 'flex-start'}}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Icon name="arrow-left" color="#fff" size={20} />
            </TouchableOpacity>
          ),
      }}
    />
      <HomeStack.Screen
        name="History"
        component={History}
        options={{
          title: `LỊCH SỬ`,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#6153FF'},
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
                style={{marginLeft: 10, alignSelf: 'flex-start'}}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Icon name="arrow-left" color="#fff" size={20} />
            </TouchableOpacity>
          ),
        }}
    />
      <HomeStack.Screen
        name="Notifications"
        children={createTopTabs}
        options={{
          title: `THÔNG BÁO`,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#6153FF'},
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
                style={{marginLeft: 10, alignSelf: 'flex-start'}}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Icon name="arrow-left" color="#fff" size={20} />
            </TouchableOpacity>
          ),
        }}
    />
    </HomeStack.Navigator>
  );

export  { HomeStackScreen ,Landing}

