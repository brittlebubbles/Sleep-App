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
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
