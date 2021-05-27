import React, {useContext, useState, useEffect} from 'react';
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
import {auth } from '../constants/firebase'
import firebase from '@react-native-firebase/app'
// import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// GoogleSignin.configure({
//   webClientId: '808804260047-r2hbumpbliodnb6s8gkhvr2bpt3dokjv.apps.googleusercontent.com',
// });

const Login = ({navigation, AUTH}) => {
  useEffect(() => {
    scopes: ['email'],
    GoogleSignin.configure({
      webClientId: '532416373089-077m43e5aava4b65ro870bden6kcrlm8.apps.googleusercontent.com',
    });
  }, [])
  // const {auth ,firebase} = firebaseSetup()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err , setError ] = useState('')
  
  
  // const [user, setUser] = useState(false)
  const login = async e =>{
        e.preventDefault();
        try {
          const res = await auth.signInWithEmailAndPassword(email,password)
          console.log(res)
          AUTH(true)
        } catch (error) {
          setError(error)
        }
    }
    async function onGoogleButtonPress() {
       
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
   const _signIn = async () => {
      try {
        // await GoogleSignin.hasPlayServices();
        const {accessToken, idToken} = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(
          idToken,
          accessToken,
        );
        await auth().signInWithCredential(credential);
        console.log('login chưa biết thế nào')
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
    
    

    const signInWithGoogle = () =>{
      auth.signInWithPopup(provider).then(auth=>{
          console.log(auth.user)
          // dispatch({ 
          //     type: 'SET_USER_GOOGLE',
          //     user: auth.user,
          // })
          // history.push('/')
      }).catch(err=>{
          setError(err.message)
      })
  }
  const signInWithFacebook = () =>{
      auth.signInWithPopup(providerFace).then(auth=>{
          console.log(auth.user.displayName)
          // dispatch({
          //     type: 'SET_USER_FACEBOOK',
          //     user: auth.user,
          // })
          // history.push('/')
      }).catch(err=>{
          setError(err.message)
      })
  }
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
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Đăng Nhập"
        onPress={(e) => login(e)}
      />
    <View style={styles.bonus}>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.forgotButton_1}
            onPress={() => navigation.navigate('Regiter')}>
            <Text style={styles.navButtonText}>
            Đăng Kí
            </Text>
        </TouchableOpacity>
    </View>

      {Platform.OS === 'android' ? (
        <View style={styles.socialBtn}>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => signInWithFacebook()}
          />

          <SocialButton  
            buttonTitle="Sign In with Google"
            btnType="logo-google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            // onPress={() => onGoogleButtonPress().then(() => console.log('login success')).catch(err=> console.log(err))}
            onPress={() => _signIn()}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Login;

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
