import React from 'react'
import { View, Text , Image, FlatList} from 'react-native'
import { LikeItem } from '../components/NotiItem'
import { favoritesDB } from '../constants/dataset'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser} from '../constants/actions/auth.action.js'
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import store from '../constants/store';

const Like = ({parking: {parkingFav}}) => {
    return (
        <View>
        <FlatList 
          data={parkingFav}
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

Like.propTypes = {
  parking: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  parking: state.parking,
  user: state.user
})
export default connect(mapStateToProps, { loadUser})(Like);