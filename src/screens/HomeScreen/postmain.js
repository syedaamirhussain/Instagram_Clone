import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PostHeader from './postHeader'
import PostBody from './postBody'
import PostFotter from './postFotter'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

const postmain = ({ data }) => {
  const [postUser, setPostUser] = useState(null)

  const getUserOfPost = async (userId) => {
    const userDocRef = doc(collection(db, "users"), userId);
    const respo = await getDoc(userDocRef)
    const userDetails = respo.data()
    setPostUser(userDetails)
  }
  React.useEffect(() => {
    getUserOfPost(data.userId)
  }, [data.userId])

  return (
    <View style={styles.container}>
      <PostHeader postBy={postUser} location={data?.location} />
      <PostBody postContent={data} />
      <PostFotter postFooterData={data} postBy={postUser} description={data?.description}/>
    </View>
  )
}

export default postmain

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'orange'
  }
})