import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewNotifi from './NewNotifi';
import MyNotifi from './MyNotifi';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Thông báo mới</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Thông báo của tôi</Text>
//       </View>
//     );
//   }
// }

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: NewNotifi,
    navigationOptions: {
      tabBarLabel:'TIN MỚI'
    }
  },
  Settings: {
    screen: MyNotifi,
    navigationOptions: {
      tabBarLabel:'CỦA TÔI'
    }
  },
});

export default createAppContainer(TabNavigator);