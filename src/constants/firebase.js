import firebase from 'firebase'
// import firebase from '@react-native-firebase/app'
// import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '532416373089-077m43e5aava4b65ro870bden6kcrlm8.apps.googleusercontent.com',
});
const firebaseConfig = {
  apiKey: "AIzaSyCwkudG9bZ06AmkZ2lIEr8Gry3IYR3rT7Y",
  authDomain: "react-native-c70ce.firebaseapp.com",
  projectId: "react-native-c70ce",
  storageBucket: "react-native-c70ce.appspot.com",
  messagingSenderId: "532416373089",
  appId: "1:532416373089:web:0fad8211c5187944782520",
  measurementId: "G-CHGVV74LPQ"
  };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const providerFace = new firebase.auth.FacebookAuthProvider();

export { auth}
// export default () =>{
//   return {firebase, auth}
// }