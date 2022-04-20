import { BottomTab } from "./BottomTab";
import Discover from "../screens/Discover";
import DiscoverDetails from "../screens/DiscoverDetails";
import Man from "../screens/Man";
import React from "react";
import Scrap from "../screens/scrap";
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
      <Stack.Screen
        name="DiscoverDetails"
        component={DiscoverDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
