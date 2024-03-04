import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './card'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/Services/firebaseActions'
import { pickImage } from '../../utils/cameraOrImage'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../../../firebase/firebaseConfig'
import { nanoid } from '@reduxjs/toolkit'
import { doc, setDoc } from 'firebase/firestore'
import { setUserProFileImg } from '../../../redux/Slices/authSlice'

const CardBar = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth?.currentUser)

  React.useEffect(() => {
    dispatch(getUsers(currentUser?.userId))
  },[currentUser?.userId])

  async function uploadImage(uri) {
    if (!uri) return
    try {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, `userProfileImages/${nanoid()}.jpg`);
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        const userDocRef=doc(db,"users",currentUser?.userId)
       await setDoc(userDocRef,{proImgLink:downloadURL},{merge:true})
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; 
    }
}

const profilePic=async()=>{
  console.log('clickeds')
  const response = await pickImage()
  const url=await uploadImage(response?.uri)
  dispatch(setUserProFileImg(url))
}



const randomUsers=useSelector(state=>state.users.allUsers)
  return (

    <View>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
          <Card  url={currentUser?.proImgLink}  name={currentUser?.name} size={70} onPress={profilePic}/>
        {randomUsers.map((item) => (
          <Card key={item.id} url={item?.proImgLink}  name={item?.name} size={65} />
        ))}
      </ScrollView>
      <View style={{ marginTop: 5, borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
    </View>
  )
}

export default CardBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 98,
    alignItems: 'center',
    gap: 10
  },


})

