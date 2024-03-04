import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { Avatar } from "react-native-paper";
import EditProfileModal from "./EditProfileModal";
import ProfileTopNavigation from "./TopNavigation";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth?.currentUser);
  const [showCard, setShowCard] = useState(false);
  const [userPosts, setUserPosts] = useState(null);
  const [myTotalPostLength, setMyTotalPostLength] = useState(0);

  useEffect(() => {
    if (currentUser && currentUser?.userId) {
      const postsRef = query(
        collection(db, "posts"),
        where("userId", "==", currentUser?.userId)
      );
      const unsubscribe = onSnapshot(postsRef, (snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          posts.push({ ...doc.data(), postId: doc.id });
        });
        setUserPosts(posts);
        setMyTotalPostLength(posts.length);
      });
      return () => unsubscribe();
    }
  }, [currentUser?.userId]);
  return (
    <>
      <StatusBar backgroundColor="white" translucent={false} />
      <View style={styles.header}>
        <Text style={styles.userName}>{currentUser?.name}</Text>
        <View style={styles.iconsRight}>
          <IconButton
            icon="plus-box-outline"
            size={26}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="menu"
            size={26}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
      <Divider />

      <View style={styles.avatarPosts}>
        <View
          style={{ justifyContent: "center", alignItems: "center", rowGap: 5 }}
        >
          <Pressable onPress={() => console.log("Pressed icon")}>
            <Avatar.Image
              size={70}
              source={{ uri: currentUser?.proImgLink }}
              style={{ marginTop: 10 }}
            />
            <IconButton
              icon={"plus"}
              iconColor="#3797ef"
              backgroundColor="#fff"
              mode="contained"
              size={12}
              style={styles.avatarPostsIcon}
            />
          </Pressable>
          <Text style={{ fontWeight: "bold" }}>{currentUser?.name}</Text>
        </View>
        <View style={{ flexDirection: "row", columnGap: 10 }}>
          <Pressable
            style={styles.statesStyle}
            android_ripple={{ color: "#DDDDDD" }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.states}>{myTotalPostLength}</Text>
              <Text>posts</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.statesStyle}
            android_ripple={{ color: "#DDDDDD" }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.states}>602</Text>
              <Text>followers</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.statesStyle}
            android_ripple={{ color: "#DDDDDD" }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.states}>791</Text>
              <Text>following</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <Divider />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:'white',
          paddingHorizontal: 20,
        }}
      >
        <EditProfileModal />
        <Button
          style={{ borderRadius: 8 }}
          buttonColor="#dddddd"
          textColor="#000"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Share profile
        </Button>
        <IconButton
          icon={showCard ? "account-plus-outline" : "account-plus"}
          containerColor="#dddddd"
          style={{ borderRadius: 8 }}
          size={20}
          onPress={() => setShowCard(!showCard)}
        />
      </View>
      <Divider />
      <View style={{ flex: 1 }}>
        <ProfileTopNavigation allPostsData={userPosts} />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee'
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    // backgroundColor:'orange'
  },
  iconsRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarPosts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  states: {
    fontWeight: "bold",
    fontSize: 18,
    // color: '#000'
  },
  statesStyle: {
    minWidth: 65,
    paddingVertical: 14,
    paddingHorizontal: 4,
    // backgroundColor: 'pink',
    borderRadius: 5,
    // backgroundColor: '#DDDDDD',
  },
  avatarPostsIcon: {
    position: "absolute",
    left: 37,
    top: 50,
    padding: 0,
    // margin:0,
  },
});
