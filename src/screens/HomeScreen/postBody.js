import React from 'react';
import { Image, StyleSheet, View,  } from 'react-native';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';


const PostBody = ({postContent}) => {
  const post = useSelector(state => state.post?.data);
  
  return (
    <View style={styles.container}>
      {postContent && 
      <Carousel
        width={400} 
        height={375}
        data={postContent?.content}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    }

    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // resizeMode: 'cover',  
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
});
