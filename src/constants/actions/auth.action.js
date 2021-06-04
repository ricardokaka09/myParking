import firestore from '@react-native-firebase/firestore';
import { createFactory } from 'react';
import store from '../store'

export const loadUser = (user,data) => async dispatch => {
    console.log(user.userInfo.uid);
    const res = await firestore()
                .collection(user.userInfo.uid)
                .doc("database").collection("order").orderBy('timestamp', 'desc')
                .get()
    res.docs.map(doc => (
        store.dispatch({
            type: "LOAD_PARKING",
            payload: doc.data().parking
        })
    ))

} 
export const addParking = (user, data) =>async dispatch  => {

    const timestamp = new Date().getTime()
    data.timestamp = timestamp
     await firestore().collection(user.userInfo.uid).doc('database').collection('order').doc(data.name).set({
            parking: data,
            timestamp: firestore.FieldValue.serverTimestamp(),
    })
}
export const addFav = (user, data) =>async dispatch  => {

    // const timestamp = new Date().getTime()
    // data.timestamp = timestamp
     await firestore().collection(user.userInfo.uid).doc('database').collection('favorites').doc(data.name).set({
            parking: data,
            timestamp: firestore.FieldValue.serverTimestamp(),
    })
}
export const removeFav = (user, data) =>async dispatch  => {

    // const timestamp = new Date().getTime()
    // data.timestamp = timestamp
     await firestore().collection(user.userInfo.uid).doc('database').collection('favorites').doc(data.name).delete()
            .then(() => {
                console.log('remove success');
            })
}
export const loadFav = (user) => async dispatch => {
    const res = await firestore()
                .collection(user.userInfo.uid)
                .doc("database").collection("favorites").orderBy('timestamp', 'desc')
                .get()
    res.docs.map(doc => (
        store.dispatch({
            type: "LOAD_PAVORITES",
            payload: doc.data().parking
        })
    ))

} 