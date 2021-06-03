/* eslint-disable prettier/prettier */
// import React from 'react'
import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, AlertType,Alert, prompt, TextInput} from 'react-native';
// import Carousel from '../components/Carousel';
import Slider from '../components/Slider';
import Icon from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { windowWidth , windowHeight } from '../utils/Dimentions';

import { addParking, loadUser } from '../constants/actions/auth.action.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import store from '../constants/store';
import IconItem from '../components/IconItem';
const data = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url:
      'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];
const Payment = ({
  route,
  user,
  parking,
  addParking,
  loadUser,
  navigation
}) => {
  const { data } = route.params;
  const {setOptions, toggleDrawer} = useNavigation()
  const [time , setTime ] = useState(1)
  const [checkBank, setCheckBank] = useState(false)
  const [checkMomo, setCheckMomo] = useState(false)

  const [ number, setNumber ] = useState('')
  const [ license, setLicence] = useState(false)
  const changeTime = (change) => {
    // e.preventDefault()
    if(time>1 && time < 10){
      change == 'add' ? setTime(time+1) : setTime(time-1)
    }
    if(time == 1){
      change == 'add' ? setTime(time+1) : setTime(time)
    }
    if(time == 10){
      change == 'add' ? setTime(time) : setTime(time-1)
    }
    
  }
  const order = async () => {
      data.time = time
      data.bienSo = number 
      console.log(data);
      addParking(user,data)
      store.dispatch({
        type: 'ADD_PARKING',
        payload: data
      })
      Alert.alert("Thong bao", "Success")
      navigation.navigate("Home")
    
  }
  // setTime(time+1)
  useEffect(() => {
    setOptions({
      title: `Bai do ${data?.name}`,
      headerRight: () => (
        <IconItem data={data}/>
      ),
    });
    console.log(data);
  },[])
  return (
    
    <View style={{flex: 1, backgroundColor: '#F5F5F5', height: windowHeight - 80}}>
      <Slider />
       {/* slide hinh anh ve bai do */}
      <View style={styles.payment__info}> 
        <View style={{alignItems: 'center'}}>
          <Text>Trang thai</Text>
          <Text style={{color: '#14E529'}}>19/21</Text>
        </View>
        <View style={{borderLeftWidth: 1}}></View>
        <View style={{alignItems: 'center'}}>
          <Text>Gio mo cua</Text>
          <Text style={{color: '#14E529'}}>19/21</Text>
        </View>
        <View style={{borderLeftWidth: 1}}></View>
        <View style={{alignItems: 'center'}}>
          <Text>Chi duong</Text>
          <IconM name='map-marker-radius-outline' size={20} color= '#14E529'></IconM>
          {/* <Text style={{color: '#14E529'}}>19/21</Text> */}
        </View>
      </View>
      {/** info ve trang thai && gio && chi duong */}
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'flex-start', marginLeft: 20, padding: 5}}>
          <Text style={{fontWeight: 'bold', alignItems: 'center', fontSize: 16}}>Chọn biển số</Text>
          <TouchableOpacity 
          style={{backgroundColor: '#fff', alignItems: 'center',padding: 5, borderWidth: 0.5, borderRadius: 5}}
          onPress={() => setLicence(!license)}
          >
            <Icon name='add-outline' size={20}></Icon>
            <Text style={{color: 'black'}}>Them bien so</Text>
          </TouchableOpacity>
        </View>
        { license? 
    
        <View style={{alignContent: 'center',marginTop: 30,backgroundColor: '#ffdeee',marginLeft: 20, padding: 5,width: 100, height: 50}}>
         <TextInput value={number} onChangeText={text => setNumber(text)} style={{textTransform: 'uppercase',backgroundColor: '#fff'}}></TextInput>
        </View>: 
        null    
      }
      </View>
      {/** Theem bieenr so */}
      <View style={{marginLeft:20, width: windowWidth -20,alignContent: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', alignItems: 'flex-start', fontSize: 16}}>Chọn thời gian</Text>
        <View style={{width: windowWidth - 40, flexDirection: 'row', justifyContent: 'space-around',backgroundColor: '#fff', alignItems: 'center',padding: 5, borderWidth: 0.5, borderRadius: 5}}>
          <Icon name='remove-outline' size={40}  onPress={() => changeTime('remove')}></Icon>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10}}>Ket thuc trong</Text>
            <Text style={{color: 'black', fontWeight: 'bold',fontSize: 20}}>{time} h</Text>
          </View>
          <Icon name='add-outline' size={40} onPress={() => changeTime('add')}></Icon>
        </View>
      </View>
      {/** chon khoang thoi gian de đỗ xe , giớ hạn 1-> 10 */}
      <View style={{flex: 1,alignItems: 'flex-start',marginLeft: 10, padding: 10}}>
        <Text style={{fontWeight: 'bold', alignItems: 'center', fontSize: 16}}>Hình thức thanh toán</Text>

        {/* -----------------------------------chon hinh thuc thanh toán ----------------------------------*/}
        <TouchableOpacity onPress={() => setCheckMomo(!checkMomo)} >
          <View style={{paddingBottom: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',borderBottomWidth: 1, width: windowWidth -40}}
            onPress={() => console.log('check')}
          >
            <Image source={require('../assets/logo.png')} style={{width: 40, height: 40, resizeMode: 'cover', padding: 10}}/>
            <Text style={{color: '#6153FF', marginLeft:20}} 
              onPress={() => setCheckMomo(!checkMomo)}
              >
            Cổng thanh toán(ATM,BankPlus,Visa
            </Text>
            {checkMomo?
            null:
            <Icon name='checkmark-outline' size={20} color='#6153FF' style={{position: 'absolute',  right: 10}}></Icon>
          }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCheckMomo(!checkMomo)}>
        <View style={{paddingBottom: 10, paddingTop:10,flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',borderBottomWidth: 1, width: windowWidth -40}}>
          <Image source={require('../assets/logo.png')} style={{width: 40, height: 40, resizeMode: 'cover'}}/>
          <Text style={{color: '#6153FF', marginLeft: 20, justifyContent: 'flex-start'}} onPress={() => setCheckMomo(!checkMomo)}>
          MOMO
          </Text>
          {checkMomo?
          <Icon name='checkmark-outline' size={20} color='#6153FF' style={{position: 'absolute',  right: 10}}></Icon>:
          null
        }
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#C4C4C4', alignItems: 'center', padding: 10, width : windowWidth -40,borderRadius: 10,marginTop: 5}}>
          <Text>Nhập mã khuyến mãi(nếu có)</Text>
        </TouchableOpacity>
        {/** chon voucher */}
      </View>
      {/* ---------------------------------------chon hinh thuc thanh toán --------------------------------*/}
      <View style={styles.payment__btn}>
        <Text style={{color: '#14E529'}}>{data.price} VND</Text>
        <TouchableOpacity style={{backgroundColor: '#6153FF', alignItems: 'center',padding: 5,  borderRadius: 5, marginLeft: 20, paddingLeft: 20, paddingRight: 20}} 
          onPress={() => order()}
        >
          <Text style={{color: '#fff', textTransform: 'uppercase'}}>Thanh Toán</Text>
        </TouchableOpacity>
      </View>
      {/** nut thanh toan && gia tien */}
    </View>
  );
};

Payment.propTypes = {
  parking: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  addParking: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  parking: state.parking,
  user: state.user
})
export default connect(mapStateToProps, {addParking, loadUser})(Payment);

const styles = StyleSheet.create({
  payment__info: {
    flexDirection: 'row',
    justifyContent: 'space-around', borderBottomWidth: 1,
    padding: 15
  },
  payment__btn: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60, 
    width: windowWidth,
    bottom :0,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  }
})
