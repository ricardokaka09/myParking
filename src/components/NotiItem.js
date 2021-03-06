import React, { useState } from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import Moment from 'react-moment'
import { useEffect } from 'react';

const NotiItem = ({data}) => {
    return (
      
        <View style={{
          flex: 1,
          flexDirection:'row',
          backgroundColor: 'white',
          borderBottomWidth: 1
        }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{color:'black', alignSelf:'center', fontWeight: 'bold'}}>Thông báo</Text>
            <Image
              source={require('../assets/logo.png')}
              style={{width:100, height:100, margin: 5}}
            />
          </View>
          
  
         
          <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent: 'center'
          }}>
            <Text style={{
              padding:15,
              fontSize: 14 ,
              color: '#6153FF',
              fontWeight: 'bold',
            }}
            >{data.name}</Text>
            <Text style={styles.flatListItem2}>{data.date}</Text>
          </View>
        </View>
      );
}

const HistoryItem = ({data}) => {
  const [hours, setHours] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  useEffect(() => {
     setHours(new Date(data.timestamp).getHours().toString())
     setDay(new Date(data.timestamp).getDay().toString())
     setMonth(new Date(data.timestamp).getMonth().toString())
    //  day = new Date(data.timestamp).getDay()
    //  month = new Date(data.timestamp).getMonth()
    console.log(hours);
  })
  return (
    <View style={{
      flex: 1,
      flexDirection:'row',
      backgroundColor: 'white'
    }}>
      <View style={{  
        flex:1,
        flexDirection:'row',
        borderBottomWidth: 1
      }}>
        <View style={{}}>
          <Text style={{padding: 5,fontWeight: 'bold'}}>Biển số xe:</Text>
          <Text style={{padding: 5, fontWeight: 'bold'}}>Thời gian:</Text>
          <Text style={{padding: 5, fontWeight: 'bold'}}>Địa điểm:</Text>
          <Text style={{padding: 5, fontWeight: 'bold'}}>Phí:</Text>
        </View>
        <View style={{flexDirection:'column', justifyContent: 'flex-start',alignItems: 'flex-start'}}>
          <Text style={styles.flatListItem1}>{data.bienSo}</Text>
          <Text style={styles.flatListItem1}>
            {hours}h   {day}-{month} -- {+hours + +data.time}h   {day}-{month}
          </Text>
          <Text style={styles.flatListItem1}>{data.name}</Text>
          <Text style={styles.flatListItem1}>{data.price}</Text>

        </View>
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
const LikeItem = ({data}) => {
  return (
    <View style={{ flex: 1 ,flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', padding: 10, borderBottomWidth: 1}}>
      <View>
        <Text style={{fontWeight: 'bold', paddingBottom: 10}}>{data.name}</Text>
        <Text>{data.price} VND/ 1 giờ</Text>
        <Text>Tổng số điểm : 10</Text>
      </View>
      <Image source={require('../assets/logo.png')} style={{width:80, height:80, margin: 5}}/>
    </View>
  )
}

export {NotiItem, HistoryItem, LikeItem }

const styles = StyleSheet.create({
    flatListItem1:{
      padding: 5,
      fontSize: 14 ,
      color: '#6153FF',
      fontWeight: 'bold',
      textAlign: 'center'
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
    }
  });
