import firebase from 'firebase'
// import firebase from '@react-native-firebase/app'
// import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '808804260047-r2hbumpbliodnb6s8gkhvr2bpt3dokjv.apps.googleusercontent.com',
// });
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
firebase.initializeApp(firebaseConfig);
// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig)
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
const auth1 = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const providerFace = new firebase.auth.FacebookAuthProvider();
export {auth1}
// export default () =>{
//   return {firebase, auth}
// }