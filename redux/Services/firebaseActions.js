import { addDoc, doc, setDoc, getDoc, collection, getDocs, query, where, deleteDoc, onSnapshot } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../firebase/firebaseConfig'
import { combineSlices } from "@reduxjs/toolkit";



// Simple signup //
export const HandleSignUp = (values, navigation, setButtonLoading) => async (dispatch) => {
  try {
    const newAcc = await createUserWithEmailAndPassword(auth, values.email, values.password);
    const userId = newAcc?.user?.uid;
    const data = {
      name: values.name,
      email: values.email,
      userId,
    }
    window.navigator.userAgent = "ReactNative";
    const res = await setDoc(doc(db, 'users', userId), data);

    console.log(res, "respone");
    //   const data = {
    //     username: name,
    //     email,
    //     userId
    //   }
    //   dispatch({ type: 'USER_DATA', payload: data });
    //   navigation.navigate('dashboard')
  } catch (error) {
    console.log(error)
  }
  finally {
    setButtonLoading(false);

  }
};


// Simple login //
export const HandleSignIn = (values, navigation, setButtonLoading) => async (dispatch) => {
  try {
    const data = await signInWithEmailAndPassword(auth, values.email, values.password);
    // console.log(data.user.email, "data when logged in successfully");
    const userId = data.user.uid
    window.navigator.userAgent = "ReactNative";
    const userData = await getDoc(doc(db, "users", userId))
    // console.log(userData, "data when logged in successfully")
    // const userDetails = userData.data()
    // dispatch({ type: 'USER_DATA', payload: userDetails });
    console.log("Successfully logged in");
    navigation.navigate('dashboard')
  } catch (error) {
    console.log(error)

  }
  finally {
    setButtonLoading(false);
  }
};


// Google sigin //
// const auth = getAuth();
export const HandleGoogleSignIn = ( navigation,) => async (dispatch) => {
  try {
    console.log('juuuuuuuuuuuuuuu')
   const resp = await signInWithPopup(auth,googleProvider)
   console.log(resp, "respone");
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = googleProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }
  catch(error){
    // Handle Errors here.
    console.log("console errrr")
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error?.customData.email;
    // The AuthCredential type that was used.
    // const credential = googleProvider.credentialFromError(error);
    // ...
  }
  finally{
    console.log('finallyyy')
  }
};







// Sign Out //
// signOut(auth).then(() => {
//   console.log('User Sign Out Successfully');
// }).catch((error) => {
//   console.log(error.message,"Error when sign out");
// });