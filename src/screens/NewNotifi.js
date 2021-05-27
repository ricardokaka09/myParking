import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Data from './Data';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
class FlatListItem extends React.Component{
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'white'
      }}>
        <Image
          source={require('../assets/logo.png')}
          style={{width:100, height:100, margin: 5}}
        >

        </Image>
        <View style={{
          flex:1,
          flexDirection:'column'
        }}>
          <Text style={styles.flatListItem1}>{this.props.item.name}</Text>
          <Text style={styles.flatListItem2}>{this.props.item.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem1:{
    padding: 15,
    fontSize: 14 ,
  },
  flatListItem2:{
    padding: 15,
    fontSize: 14,
    
  },
  text:{
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'#6153FF',
    color: 'white'
  },
  icon:{
    color: 'white',
    // marginRight: 300
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
     
      <View style={{ flex: 1, justifyContent: 'center' }}>
      
        
        <Text style={styles.text}><AntDesign style={styles.icon} name="arrowleft" size={30}></AntDesign>Thông báo</Text>
      
        <FlatList 
          data={Data}
          renderItem={({item, index})=>{
            //console.log(`Item=${item}, index=${index}`);
            return(
              <FlatListItem item={item} index={index}>

              </FlatListItem>
            )
          }}
          >

        </FlatList>
      </View>
    );
  }
}
export default HomeScreen;