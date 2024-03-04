import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import VideoScreen from "./VideoScreen";
import GridScreen from "./GridScreen";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function ProfileTopNavigation({ allPostsData }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarItemStyle: { paddingBottom: 5 },
        tabBarIndicatorStyle: { backgroundColor: "gray" },
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="GridScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "grid-on" : "grid-off"}
              size={24}
              color={focused ? "#000" : "gray"}
            />
          ),
        }}
      >
        {() => <GridScreen allPostsData={allPostsData} />}
      </Tab.Screen>
      <Tab.Screen
        name="VideoScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={focused ? "folder-video" : "folder-video"}
              size={24}
              color={focused ? "#000" : "grey"}
            />
          ),
        }}
      >
        {() => <VideoScreen allPostsData={allPostsData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
