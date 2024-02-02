import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './card'

const CardBar = () => {
  const image = [{
    index: 1,
    url: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
    name: 'image1'
  },
  {
    index: 2,
    url: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image2'
  },
  {
    index: 3,
    url: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image3'
  },
  {
    index: 4,
    url: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image4'
  },
  {
    index: 5,
    url: 'https://fastly.picsum.photos/id/512/200/300.jpg?hmac=la5xkVbvHxjdyuCGyQl9H0Hhom_c8BN-5heSmUIPUzE',
    name: 'image5'
  },
  {
    index: 6,
    url: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
    name: 'image6'
  },
  {
    index: 7,
    url: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image7'
  },
  {
    index: 8,
    url: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image8'
  },
  {
    index: 9,
    url: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'image9'
  },
  {
    index: 10,
    url: 'https://fastly.picsum.photos/id/512/200/300.jpg?hmac=la5xkVbvHxjdyuCGyQl9H0Hhom_c8BN-5heSmUIPUzE',
    name: 'image10'
  },
  ]
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
        {image.map((item) => (
          <Card url={item.url} key={item.index} name={item.name} />
        ))}
      </ScrollView>
      <View style={{marginTop:5, borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
    </View>
  )
}

export default CardBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    height: 98,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },


})

