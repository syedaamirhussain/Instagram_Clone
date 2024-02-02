import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from './homeHeader'
import { Icon, IconButton } from 'react-native-paper';
import CardBar from './CardBar';
import PostMain from './postmain';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <CardBar />
        
        <PostMain />
        <PostMain />
        <PostMain />
        <View style={{ borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
      </ScrollView>
    </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
    // justifyContent:"center",
    // alignItems:"center"
  }
})