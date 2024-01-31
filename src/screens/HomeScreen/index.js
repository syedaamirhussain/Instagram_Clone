import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <>
    <Appbar.Header>

        <Appbar.Action icon="camera"  />

    </Appbar.Header>
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 30
      },
})