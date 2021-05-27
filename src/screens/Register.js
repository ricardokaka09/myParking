/* eslint-disable prettier/prettier */
import React, {useContext, useState,useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import firebaseSetup from '../constants/firebase'
import { auth } from '../constants/firebase'


const Register = ({navigation}) => {
  // const {auth} = firebaseSetup()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [formData, setFormData]  =useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // }) 
  const [error , setError] = useState('')

  // const {name , email , password} = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData , [e.target.name]: e.target.value})
  // } 
  
//   const signIn = e =>{
//     e.preventDefault();

//     auth.signInWithEmailAndPassword(email,password)
//     .then(auth =>{
//         history.push('/')
//     }).catch(err => alert(err.message))
// }
const register = e =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
        // console.log('email: ' + email+ '\n' + "password: " + password);
        //it successfully created a new user with email and password
        console.log(auth)
        console.log({email,password})
    })
    .catch(err => setError(err))
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{margin: 10}}>
        <Text style={{color: '#f22334'}}>{error}</Text>
      </View>
      <FormInput
        name='email'
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        name='name'
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Hoàn tất"
        onPress={(e) => register(e)}
      />
    </ScrollView>
  );
};

export default Register;

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
