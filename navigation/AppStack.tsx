import { BottomTab } from "./BottomTab";
import Discover from "../screens/Discover";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
