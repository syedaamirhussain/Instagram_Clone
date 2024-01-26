import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    logo:{
      
    }

})