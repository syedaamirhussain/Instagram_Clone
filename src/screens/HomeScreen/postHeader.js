import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from 'react';
import { Avatar, IconButton } from 'react-native-paper';


const PostHeader = ({location,postBy}) => {
  // console.log(postBy,'postBy')
  return (
    <View style={styles.container}>
      <View style={styles.nameCity}>
        <Avatar.Image size={38} source={{ uri: postBy?.proImgLink }} />
        <View>
          <Text style={styles.name}>{postBy?.name}</Text>
          <Text style={styles.city}>{location}</Text>
        </View>
      </View>
      <IconButton icon="dots-vertical" onPress={() => console.log('Pressed')} />
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    // backgroundColor:'green',
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  nameCity: {
    flexDirection: 'row',
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  city: {
    fontWeight: '200'
  },


})