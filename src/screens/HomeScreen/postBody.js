import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostBody = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
    </View>
  )
}

export default PostBody

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        maxHeight:375,
    },
    image:{
        width:'100%',
        height:'100%',
    }
})