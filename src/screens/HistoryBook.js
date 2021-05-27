import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HistoryData from './HistoryData';
import FormButton from '../components/FormButton';
class HistoryBook extends React.Component {
  render() {
    return (
        <View>
        <Text style={styles.text}><AntDesign style={styles.icon} name="arrowleft" size={20} ></AntDesign>Lịch sử đặt chỗ</Text>
        <View >
           <Text style={{padding:15}}>Từ</Text>
           
           <TextInput placeholder="vd: 20/05/2021  " style={styles.textInput}></TextInput>
           {/* <AntDesign name="calendar" size={20}></AntDesign> */}
            
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: 360,
                marginLeft: 15
            }}>
            </View>

           <Text style={{padding:15}}>Tới</Text>
           <TextInput placeholder="vd: 25/05/20221" style={styles.textInput}></TextInput>
           
           <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: 360,
                marginLeft: 15
            }}>

            </View>
            
            <FormButton
              buttonTitle="Xem lịch sử đặt chỗ"
              // onPress={}
            />
        </View>
        <FlatList 
          data={HistoryData}
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
class FlatListItem extends React.Component{
    render() {
      return (
        <View style={{
          flex: 1,
          flexDirection:'row',
          backgroundColor: 'white'
        }}>
          <View style={{
            flex:1,
            flexDirection:'column'
          }}>
            <Text style={{padding: 15,}}>Biển số xe:   <Text style={styles.flatListItem1}>{this.props.item.name}</Text></Text>
            <Text style={{padding: 15, marginVertical: -5}}>Thời gian:    <Text style={styles.flatListItem1}>{this.props.item.thoigian}</Text></Text>
            <Text style={{padding: 15, marginVertical: -5}}>Địa điểm:     <Text style={styles.flatListItem1}>{this.props.item.diadiem}</Text></Text>
            <Text style={{padding: 15, marginVertical: -5}}>Phí:               <Text style={styles.flatListItem1}>{this.props.item.phi}</Text></Text>
            <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                 }}
            />
          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    flatListItem1:{
      padding: 15,
      fontSize: 14,
      color:'#6153FF'
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
    },
    textInput:{
      //borderBottomWidth: 1,
      padding: 15,
      
    },
    
  });

export default HistoryBook;