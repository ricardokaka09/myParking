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
// import {AuthContext} from '../navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      {/* <Text style={styles.text}>RN Social App</Text> */}

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Đăng Nhập"
        onPress={() => login(email, password)}
      />
    <View style={styles.bonus}>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.forgotButton_1}
            onPress={() => navigation.navigate('Signup')}>
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
            // onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="logo-google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            // onPress={() => googleLogin()}
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
