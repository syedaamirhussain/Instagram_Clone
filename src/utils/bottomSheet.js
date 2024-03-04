import { Feather } from "@expo/vector-icons";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import React, { useRef } from "react";
import { View, TextInput, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import { IconButton, Divider, Button, Avatar, Text } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import { nanoid } from "@reduxjs/toolkit";

export default function BottomSheetComponent({ postGet }) {
  const refRBSheet = useRef();
  const [isSending, setIsSending] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const currentUser = useSelector(state => state.auth.currentUser);

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  const handleCommentSub = async () => {
    const commentsData = {
      userProfileImage: currentUser?.proImgLink,
      comment: comment,
      userId: currentUser?.userId,
      date: new Date().getTime(),
      commentId: nanoid(),
      username: currentUser?.name
    };

    const docRef = doc(db, "posts", postGet?.postId);
    await updateDoc(docRef, {
      comments: arrayUnion(commentsData)
    });
    setComment("");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <IconButton
          icon={() => <Feather name="message-circle" size={24} color="black" />}
          onPress={openBottomSheet}
        />
        <RBSheet
          ref={refRBSheet}
          height={550}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.8)"
            },
            draggableIcon: {
              backgroundColor: "grey"
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ padding: 14 }}>Comments</Text>
              <Divider />
            </View>
            <FlatList
              data={postGet?.comments}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", padding: 10, columnGap: 20 }}>
                  <Avatar.Image source={{ uri: item?.userProfileImage }} size={36} />
                  <View style={{ justifyContent: 'center', width: 240, rowGap: 5 }}>
                    <Text style={{ fontWeight: 700 }}>{item?.username}</Text>
                    <Text>{item.comment}</Text>
                  </View>
                </View>
              )}
              key={({ item }) => item?.commentId}
            />
            <Divider />
          </View>
          <View style={styles.textInputContainer}>
            <Avatar.Image source={{ uri: currentUser?.proImgLink }} size={36} />
            <TextInput style={styles.textInput} placeholder="Enter comment here" value={comment} onChangeText={(value) => setComment(value)} />
            <IconButton icon={'send'} onPress={handleCommentSub} loading={isSending} />
          </View>
        </RBSheet>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "white",
    gap: 6
  },
  textInput: {
    flex: 1,
    width: "100%",
    padding: 10
  }
});
