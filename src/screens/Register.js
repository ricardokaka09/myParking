/* eslint-disable prettier/prettier */
import React, {useContext, useState,useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import { auth1} from '../constants/firebase'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {register} from '../constants/actions/auth'
import auth from '@react-native-firebase/auth';

const Register = ({navigation,register}) => {
  const [eye, setEye] = useState('eye-off-outline');
  
  const [formData, setFormData]  =useState({
    name: '',
    sex: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    password2: ''
  }) 
  const [error , setError] = useState('')

  const {name,sex, address,phone , email , password, password2} = formData;

  const onChange = (val, ten) => {
    setFormData({ ...formData , [ten]: val})
  } 
  
//   const signIn = e =>{
//     e.preventDefault();

//     auth.signInWithEmailAndPassword(email,password)
//     .then(auth =>{
//         history.push('/')
//     }).catch(err => alert(err.message))
// }
    const change =() =>{
        console.log('active');
    }
const onsubmit = async dispatch =>{
    // console.log(formData);
    const res = await auth().createUserWithEmailAndPassword(email, password);
    console.log(res);
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{margin: 10}}>
        <Text style={{color: '#f22334'}}>{error}</Text>
      </View>
      <FormInput
        name='name'
        labelValue={name}
        onChangeText={(val) => onChange(val, 'name')}
        placeholderText="Họ và tên"
        iconType="person-circle-outline"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />
      <FormInput
        name='sex'
        labelValue={sex}
        onChangeText={(val) => onChange(val, "sex")}
        placeholderText="male"
        iconType="man-outline"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />
      <FormInput
        name='address'
        labelValue={address}
        onChangeText={(val) => onChange(val, 'address')}
        placeholderText="address"
        iconType="location-outline"
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />
      <FormInput
        name='phone'
        labelValue={phone}
        onChangeText={(val) => onChange(val, 'phone')}
        placeholderText="SĐT"
        iconType="call-outline"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />
      <FormInput
        name='email'
        labelValue={email}
        onChangeText={(val) => onChange(val, 'email')}
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />

      <FormInput
        name='password'
        labelValue={password}
        onChangeText={(val) => onChange(val, 'password')}
        placeholderText="Password"
        iconType="lock-closed-outline"
        // secureTextEntry={true}
        eye={eye}
      />
      <FormInput
        name='password2'
        labelValue={password2}
        onChangeText={(val) => onChange(val, 'password2')}
        placeholderText="confirm pass"
        iconType="lock-closed-outline"
        // secureTextEntry={true}
        eye={eye}
      />

      <FormButton
        buttonTitle="Đăng Kí"
        onPress={() => onsubmit()}
      />
    </ScrollView>
  );
};
Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  user :PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, {register})(Register)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#6153FF',
    color: '#FFFFFF',
    height: '100%',
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
    borderColor: '#ccc',
    marginBottom: 2,
    borderBottomWidth: 1,
  },

  bonus: {
    display: 'flex',
    //   justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //   backgroundColor: '#f22334'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    textAlign: 'left',
  },
  forgotButton_1: {
    marginVertical: 15,
    paddingHorizontal: 40,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  socialBtn: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginBottom: 100,
    //   paddingBottom: 20,
    //   backgroundColor: "#fff"
  },
});
