import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import { Noti} from '../constants/dataset'
import {NotiItem} from '../components/NotiItem'

const Notification = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <FlatList 
          data={Noti}
          renderItem={({item, index})=>{
            return(
              <NotiItem data={item}/>
            )
          }}
          >

        </FlatList>
      </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    text:{
      padding: 15,
      fontSize: 20,
      textAlign: 'center',
      backgroundColor:'#6153FF',
      color: 'white'
    }
  });