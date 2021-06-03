import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput'
// import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import auth from '@react-native-firebase/auth';
import store from '../constants/store'
import Register from './Register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {login} from '../constants/actions/auth'
import { LOGIN_SUCCESS } from '../constants/types';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect } from 'react';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';


const Login = ({navigation, login}) => {
  // const {auth } = firebaseSetup()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err , setError ] = useState('')
  useEffect(() =>{
    GoogleSignin.configure({
        webClientId: '808804260047-r2hbumpbliodnb6s8gkhvr2bpt3dokjv.apps.googleusercontent.com',
      });
  },[])

  // const [user, setUser] = useState(false)
  const onSubmit =  async () =>{
        // e.preventDefault();
        const res = await auth().signInWithEmailAndPassword(email, password);
        const { user } = res
        console.log(user._user);
        store.dispatch({
          type: LOGIN_SUCCESS,
          payload: user._user
        })
        // auth()
        //   .createUserWithEmailAndPassword(email, password)
        //   .then(() => {
        //     console.log('User account created & signed in!');
        //     dis
        //   })
        //   .catch(error => {
        //     if (error.code === 'auth/email-already-in-use') {
        //       console.log('That email address is already in use!');
        //     }

        //     if (error.code === 'auth/invalid-email') {
        //       console.log('That email address is invalid!');
        //     }

        //     console.error(error);
        //   });

    }
    async function onGoogleButtonPress() {
       
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
    // async function onFacebookButtonPress() {
    //   // Attempt login with permissions
    //   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
    //   if (result.isCancelled) {
    //     throw 'User cancelled the login process';
    //   }
    
    //   // Once signed in, get the users AccesToken
    //   const data = await AccessToken.getCurrentAccessToken();
    
    //   if (!data) {
    //     throw 'Something went wrong obtaining access token';
    //   }
    
    //   // Create a Firebase credential with the AccessToken
    //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
    //   // Sign-in the user with the credential
    //   return auth().signInWithCredential(facebookCredential);
    // }
//   const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>{err}</Text>

      <FormInput
        name='email'
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        name='pass'
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock-closed-outline"
        // secureTextEntry={true}
        eye='chicungdc'
      />

      <FormButton
        buttonTitle="Đăng Nhập"
        onPress={() => onSubmit()}
      />
    <View style={styles.bonus}>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.forgotButton_1}
            onPress={() => navigation.navigate("Register")}>
            <Text style={styles.navButtonText}>
            Đăng Kí
            </Text>
        </TouchableOpacity>
    </View>

      {Platform.OS === 'android' ? (
        <View style={styles.socialBtn}>
          <SocialButton
            buttonTitle="Đăng nhập với Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => console.log('login fb')}
          />

          <SocialButton
            buttonTitle="Đăng nhập với Google"
            btnType="logo-google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => onGoogleButtonPress().then(() => console.log('login success'))}
          />
        </View>
      ) : null}

      
    </ScrollView>
  );
};
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  user :PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, {login})(Login)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#6153FF',
    color: '#FFFFFF',
    height: '100%'
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
    borderColor: '#ccc', 
    marginBottom: 2,
    // padding: 10,
    // borderBottomColor: '#ccc',r
    borderBottomWidth: 1
    // marginBottom: 0
  },
  
  bonus: {
      display: 'flex',
    //   justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    //   backgroundColor: '#f22334'
  }
  ,
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    textAlign: 'left'
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
  }
});
