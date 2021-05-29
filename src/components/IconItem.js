import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconItem = () => {
    const [heart, setHeart] = useState(false)
    return (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => setHeart(!heart)}>
            {heart? 
                <Icon name="heart" size={30} color='red'/>:
                <Icon name="heart-outline" size={30} color="black"/> 
            }
        </TouchableOpacity>
    )
}

export default IconItem
