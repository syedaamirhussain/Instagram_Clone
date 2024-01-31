// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   initializeAuth,
//   getReactNativePersistence,
// } from 'firebase/auth';
// // import { getStorage } from 'firebase/storage';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore } from 'firebase/firestore';
// import { GoogleAuthProvider } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyB9mgXi8YZie8C2M5wjvycC2xpGirmBu9g",
//     authDomain: "instagram-db9a7.firebaseapp.com",
//     projectId: "instagram-db9a7",
//     storageBucket: "instagram-db9a7.appspot.com",
//     messagingSenderId: "521936870603",
//     appId: "1:521936870603:web:3537cc66f22b2756a44f4e"
//   };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// const auth = initializeAuth(app, {
// persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });


// // const auth=getAuth(app)
// // const storage = getStorage(app);
// export{ auth, createUserWithEmailAndPassword,db,provider};


import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  GoogleAuthProvider
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB9mgXi8YZie8C2M5wjvycC2xpGirmBu9g",
  authDomain: "instagram-db9a7.firebaseapp.com",
  projectId: "instagram-db9a7",
  storageBucket: "instagram-db9a7.appspot.com",
  messagingSenderId: "521936870603",
  appId: "1:521936870603:web:3537cc66f22b2756a44f4e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, createUserWithEmailAndPassword, db, googleProvider };
