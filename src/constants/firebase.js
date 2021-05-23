// import firebase from 'firebase'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '808804260047-r2hbumpbliodnb6s8gkhvr2bpt3dokjv.apps.googleusercontent.com',
});
const firebaseConfig = {
    apiKey: "AIzaSyDTaPh10U-jlBAFwJHtnpaFLsA_1mSk3Ss",
    authDomain: "chuyende-e729a.firebaseapp.com",
    projectId: "chuyende-e729a",
    storageBucket: "chuyende-e729a.appspot.com",
    messagingSenderId: "808804260047",
    appId: "1:808804260047:web:a3c95c0f0f3ba54bf57fba",
    measurementId: "G-GY3LN73ERW"
  };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const providerFace = new firebase.auth.FacebookAuthProvider();

export default () =>{
  return {firebase, auth}
}