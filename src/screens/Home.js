import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Button ,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { windowHeight, windowWidth } from '../utils/Dimentions';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { parkingDB } from '../constants/dataset'
import { loadFav, loadUser } from '../constants/actions/auth.action.js'

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: windowHeight / 2,
   alignItems: 'center',
   borderBottomColor: 'black',
   flexDirection: 'column',
   flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
   height: windowHeight ,
   flex: 1
  //  position: 'relative',
  //  zIndex: 1,
 },
 form: {
  zIndex:100,
  // flex: 1,
  borderWidth: 0.5,
  // borderRadius: 2,
  // alignItems: 'center',
  // justifyContent: 'center',
  position: 'absolute',
  marginTop : 20,
  width: windowWidth - 50,
  backgroundColor: '#FFFFFF',
  borderRadius: 15,
 },
 form__input: {
  height: 40,
  margin: 12,
  borderBottomWidth: 1,
  width: '90%',
 },
 form__address: {
  // borderWidth : 1,
  justifyContent: 'center',
  left: 0,
 },
 form__address__text: {
   justifyContent:  'flex-start',
   marginBottom: 5,
   alignItems: 'flex-start',
   width: '40%',
   borderWidth: 1,
   borderRadius: 50,
    marginLeft: 40,
    textAlign: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
 },
 datCho: {
    flex: 1,
    backgroundColor: '#fff',
    flexBasis: 1,
    position: 'absolute',
    bottom: 0,  
    // padding: 15,
    width: windowWidth,
    flexDirection: 'column'
 },
 datCho__status: {
   flex: 1,
   flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
 },
 datCho__btn:{
 
   flex: 1,
  //  alignItems: 'center'
  backgroundColor: '#6153FF',
  padding: 10,
 },
 datCho__btn__text:{
    textAlign: 'center',
   textTransform: 'uppercase',
   color: '#fff'
 }
});

const Home = ({navigation,user, loadUser,loadFav}) => {
  const {setOptions, toggleDrawer} = useNavigation()

  const [text, setText ] =  useState()
    const onChangeText = (text) => {
      setText(text);
    console.log(windowWidth - 10)
  }
  const [area, setArea] = useState({})
  const [location, setLocation] = useState({
    latitude: 16.0085,
    longitude:  108.2577
  })
  const { latitude, longitude } = location
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon name="reorder-three-outline" size={30} color='#fff'/>
        </TouchableOpacity>
      ),
    });
    loadUser(user)
    loadFav(user)
  }, []);
    return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.form__input}
          onChangeText={text => onChangeText(text)}
          value={text}
          placeholder= 'Nhap dia chi'

        />  
        <View style={styles.form__address}>
          <Text style={styles.form__address__text}>address</Text>
        </View>
     
      </View>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: latitude,
         longitude: longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
      >
         {parkingDB.map((item, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: item.geoLocation.latitude,
              longitude: item.geoLocation.longitude
            }}
            onPress={() => setArea(item)}
          >
              <Callout>
                
                <View>

                  <Text >{item.name}</Text>
                </View>
              </Callout>
          </Marker>
        ))}
     </MapView>
     
      <View style={styles.datCho}>
        <View style={styles.datCho__status}>
          <View >
            <Text>
            Bai do {area?.name}
            </Text>
            <Text>
              {area?.slot}/ {area?.amount} cho
            </Text>
          </View>
          <Text style={styles.datCho__distance}>8 KM</Text>
        </View>
        <TouchableOpacity
          style={styles.datCho__btn}
          onPress={() => navigation.navigate('Payment',{data: area})}>
          <Text style={styles.datCho__btn__text}>Dat Cho</Text>
        </TouchableOpacity>
        {/* <Button></Button> */}
      </View>
   </View>
    )
}
Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
  loadFav: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user :PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, { loadUser , loadFav})(Home)

