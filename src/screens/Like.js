import React from 'react'
import { View, Text , Image, FlatList} from 'react-native'
import { LikeItem } from '../components/NotiItem'
import { favoritesDB } from '../constants/dataset'

const Like = () => {
    return (
        <View>
        <FlatList 
          data={favoritesDB}
          renderItem={({item, index})=>{
            return(
              <LikeItem data={item}/>
            )
          }}
          >

        </FlatList>
      </View>
    )
}

export default Like
