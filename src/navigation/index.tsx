import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./BottomNavigation";

export function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
