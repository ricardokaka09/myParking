import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addFav , removeFav} from '../constants/actions/auth.action.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add } from 'react-native-reanimated';
import store from '../constants/store.js';
import { useEffect } from 'react';
import parking from '../constants/reducer/parking.js';

const IconItem = ({user, data, addFav, parking: {parkingFav}, removeFav}) => {
    const [heart, setHeart] = useState(false)
    const submit = () => {
        setHeart(!heart)
        if(!heart){
            addFav(user, data)
            store.dispatch({
                type: 'ADD_FAVORITES',
                payload: data
            })
        }else{
            removeFav(user, data)
            // store.dispatch({
            //     type: 'REMOVE_FAVORITES',
            //     payload: data
            // })
        }
        
    }
    useEffect(() =>{
        parkingFav.map(parking => {
            if(parking.name === data.name){
                setHeart(true)
            }
        })
    })
    return (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => submit()} >
            {heart? 
                <Icon name="heart" size={30} color='red'/>:
                <Icon name="heart-outline" size={30} color="black"/> 
            }
        </TouchableOpacity>
    )
}

IconItem.propTypes = {
    parking: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    addFav: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
  }
  
  const mapStateToProps = state => ({
    parking: state.parking,
    user: state.user
  })
  export default connect(mapStateToProps, {addFav,removeFav})(IconItem);
