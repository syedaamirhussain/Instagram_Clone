import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from './postHeader'
import PostBody from './postBody'
import PostFotter from './postFotter'

const postmain = () => {
  return (
    <View style={styles.container}>
      <PostHeader/>
      <PostBody/>
      <PostFotter/>
    </View>
  )
}

export default postmain

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'orange'
    }
})