import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Register from '../screens/Register';
import Payment from '../screens/Payment';
import Notification from '../screens/Notification';

const MaterialTopTabs = createMaterialTopTabNavigator();

const createTopTabs = (props) => {
    return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="TIN Mơi"
        component={Notification}
        // options={{ title: props.route.params.name }}
      />
      <MaterialTopTabs.Screen name="CUA TOI" component={Notification} />
      {/* <MaterialTopTabs.Screen name="Tab3" component={Tab3} /> */}
    </MaterialTopTabs.Navigator>
    )
  }

  export default createTopTabs;