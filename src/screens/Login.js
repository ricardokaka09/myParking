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
import { auth1 } from '../constants/firebase'
// import firebaseSetup from '../constants/firebase'
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Register from './Register';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
GoogleSignin.configure({
  webClientId: '532416373089-077m43e5aava4b65ro870bden6kcrlm8.apps.googleusercontent.com',
});

const Login = ({navigation}) => {
  // const {auth } = firebaseSetup()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err , setError ] = useState('')
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '532416373089-077m43e5aava4b65ro870bden6kcrlm8.apps.googleusercontent.com',
    })
  }, [])
  // const [user, setUser] = useState(false)
  const login = async e =>{
        e.preventDefault();
    
        auth1.signInWithEmailAndPassword(email,password)
        .then(auth =>{
          console.log(auth);
            // authentication(true)
            // navigation.navigate("Home")

        }).catch(err => setError(err))
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
        onPress={(e) => login(e)}
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
