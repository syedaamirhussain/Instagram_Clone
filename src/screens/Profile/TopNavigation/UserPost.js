import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import PostHeader from "../../HomeScreen/postHeader";

const UserPost = ({ UserAllPosts }) => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.container}>
        <PostHeader/>

      </View>
    </>
  );
};

export default UserPost;

const styles = StyleSheet.create({});
