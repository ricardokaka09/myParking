import React from 'react'
import { View, Text, StyleSheet , FlatList} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import  Icon from 'react-native-vector-icons/Ionicons';
import FormButton from '../components/FormButton';
import { HistoryItem } from '../components/NotiItem';
import { HistoryDB} from '../constants/dataset'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser} from '../constants/actions/auth.action.js'
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import store from '../constants/store';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const History = ({navigation,user, parking: {myParking}}) => {
  useEffect(() => {
      console.log(myParking);
  },[])
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1}}>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', padding: 15, paddingBottom: 25}}>
                    <Text style={{padding:5}}>Từ</Text>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
                        <Text style={{marginRight:50, fontSize: 18}}>22/ 10 /2020</Text>
                        <Icon name="calendar-outline" size={20}/>
                    </View>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',padding: 15, paddingBottom: 25}}>
                     <Text style={{padding:5}}>Đến</Text>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
                        <Text style={{marginRight:50, fontSize: 18}}>22/ 10 /2021</Text>
                        <Icon name="calendar-outline" size={20}/>
                    </View>
                </View>
            </View>
        <FlatList 
          data={myParking}
          renderItem={({item, index})=>{
            //console.log(`Item=${item}, index=${index}`);
            return(
              <HistoryItem data={item}/>
              // console.log(item)
            )
          }}
          >
        </FlatList>
      </View>
    );
}
History.propTypes = {
  parking: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  parking: state.parking,
  user: state.user
})
export default connect(mapStateToProps, { loadUser})(History);

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
