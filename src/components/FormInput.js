import React, { useEffect, useState } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import Icon from 'react-native-vector-icons/Ionicons';

const FormInput = ({name,labelValue, placeholderText, iconType, eye, ...rest}) => {
    const [eyeOff, setEyeOff] = useState(true)
    const [sercurity, setSercurity] = useState(true)
    // useEffect(() => {
    //     if( name === 'password' || name === 'password2'){
    //       setSercurity(true)
    //   }
    // },[])
    const change=   () => {
        setEyeOff(!eyeOff)
        setSercurity(!sercurity)
    }
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Icon name={iconType} size={25} color="#666" />
      </View>

      <TextInput
        name={name}
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={sercurity}
        {...rest}
      />

      {eye? 
      <Icon name={eyeOff? 'eye-off-outline': 'eye-outline'} size={25} onPress={() => change()}></Icon>  :
      null
    }
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',     
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    borderRadius: 50,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});