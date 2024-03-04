import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import HomeHeader from './homeHeader'
import CardBar from './CardBar';
import PostMain from './postmain';
import CameraModal from '../../components/CameraModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/Services/firebaseActions';

let headerHeight = 200;
const HomeScreen = () => {

  const scrollYClamped = useRef(new Animated.Value(0)).current;
  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = dispatch(getAllPosts());
  }, [dispatch]);

  const posts = useSelector(state => state.firebasePost.postData);

  return (

    <>
      {
        !modalVisible ? <View style={styles.container}>
          <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
            <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
              <HomeHeader modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </Animated.View>
            <CardBar />
            {posts.map((post, index) => (
              <PostMain key={post.postId} data={post} />
            ))}
            <View style={{ borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
          </ScrollView>
        </View> : <CameraModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      }


    </>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})