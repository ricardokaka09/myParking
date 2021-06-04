import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { windowHeight, windowWidth } from '../utils/Dimentions';

const Covid = () => {
    const [countries,setCountries] = useState([]);
    const [countryInfo,setCountryInfo] = useState({});
    const [tableData,setTableData] = useState([])
    const [mapCountries,setMapCountries] = useState([])
    const [location, setLocation] = useState({
        latitude: 16.0085,
        longitude:  108.2577
      })
      const { latitude, longitude } = location
      useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response=> response.json())
        .then(data=>{
          setCountryInfo(data);
          console.log(data);
        })
      },[])
      useEffect(()=>{
        const getCountriesData = async () =>{
          await fetch('https://disease.sh/v3/covid-19/countries')
          .then((response) => response.json())
          .then((data) =>{
            const countries =data.map((country)=>(
              {
                name:country.country,
                value: country.countryInfo.iso2
              }
            ));
            console.log(data);
            // const sortedData = sortData(data);
            // console.log(data);
            setTableData(sortedData);
            setMapCountries(data);
            setCountries(countries);
          })
        }
        getCountriesData();
      },[]);
    return (
        <View>
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
         {mapCountries.map((item, i) => (
          <Marker
            key={i}
            centerOffset={{
              x: item.countryInfo.lat,
              y: item.countryInfo.long
            }}
            flat= {item.countryInfo.flat}
            // onPress={() => setArea(item)}
          >
              <Callout>
                
                <View style={{backgroundColor: "red", padding: 10}}>
                  <Text >{item.country}</Text>
                </View>
              </Callout>
          </Marker>
        ))}
     </MapView>
        </View>
    )
}

export default Covid


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
    },
   });
   