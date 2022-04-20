import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import AppNavigator from "./AppStack";
import Discover from "../screens/Discover";
import Profile from "../screens/Profile";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          //   height: 90,
          //   paddingHorizontal: 5,
          //   paddingTop: 0,
          backgroundColor: "#1C2031",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#4A80F0",
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="md-compass-outline" size={30} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="bar-graph" size={20} color="#515979" />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="account" size={30} color="#515979" />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
