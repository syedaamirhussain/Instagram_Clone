import { addDoc, doc, setDoc, getDoc, collection, getDocs, query, where, deleteDoc, onSnapshot } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../firebase/firebaseConfig'
import { combineSlices } from "@reduxjs/toolkit";
import { setCurrentUser, setIsError, setIsLoggedIn } from "../Slices/authSlice";
import { getAllUsers } from "../Slices/otherUserSlice";
import { addfirebasePost } from "../Slices/firebasePostsSlice";



// Simple signup //
export const HandleSignUp = (values, navigation, setButtonLoading) => async (dispatch) => {
  try {
    const newAcc = await createUserWithEmailAndPassword(auth, values.email, values.password);
    const userId = newAcc?.user?.uid;
    const data = {
      name: values.name,
      email: values.email,
      userId,
      followers: [],
      following: [],
      gender:'',
      createdAt: new Date().toISOString(),
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
export const HandleSignIn = (values, navigation, setButtonLoading, reset) => async (dispatch) => {
  try {
    const data = await signInWithEmailAndPassword(auth, values.email, values.password);
    const userId = data?.user.uid;
    if (userId) {
      const userData = await getDoc(doc(db, "users", userId))
      dispatch(setCurrentUser(userData.data()))
      dispatch(setIsLoggedIn(true))
      navigation.navigate('dashboard')
      reset()
    }
  } catch (err) {
    dispatch(setIsError(err.code))
  }
  finally {
    setButtonLoading(false);
  }
};


// get All users
export const getUsers = (userId) => async (dispatch) => {
  try {
    const q = query(collection(db, "users"), where("userId", "!=", userId));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(getAllUsers(users));
  }
  catch (err) {
    console.log(err, "Error in getUsers");
  }

};

// Get All Posts //
export const getAllPosts = () => async (dispatch) => {
  try {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
        posts.push({ postId: doc.id, ...doc.data()});
      });
      dispatch(addfirebasePost(posts));
    });
    return unsubscribe;
  } catch (err) {
    console.log(err, "Error in getAllPosts");
  }
};


// Sign Out //
export const logout = (navigation) => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        console.log('User Sign Out Successfully');
        navigation.navigate('login');
        resolve();
      })
      .catch((error) => {
        console.error('Error when signing out:', error.message);
        reject(error);
      });
  });
};



