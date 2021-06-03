import firestore from '@react-native-firebase/firestore';
import store from '../store'

export const loadUser = (user) => async dispatch => {
    console.log(user.userInfo.uid);
    const res = await firestore()
                .collection('order')
                .doc(user.userInfo.uid)
                .get();
    const { _data } = res;
    store.dispatch({
        type: 'ADD_PARKING',
        payload: _data
    })
    // console.log(_data);
    // console.log(res._data)
} 
export const addParking = (user, data) =>async dispatch  => {
    // const uid = user.user.userInfo.uid
    // console.log(uid);
    console.log(user.userInfo.uid)
    data.timeStamp = new Date().getTime()
    console.log(data);
    const res = await firestore().collection('order').doc(user.userInfo.uid).get(data.key);
    if(!res){
        const res = await firestore().collection('order').doc(user.userInfo.uid).doc(data.key).set(data)
    }
   loadUser(user)
// const demo = await firestore().collection('rooms').doc(user.userInfo.uid).collection('messages').add(data)
//    const res2 = await db.collection("dchung").doc("hungdang").get()
// console.log(demo)
//    console.log(res)
//    console.log(res);
    // dispatch({
    //     type: ADD_PARKING,
    //     payload: res
    // })
}