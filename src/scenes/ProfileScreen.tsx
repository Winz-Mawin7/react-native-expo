import React from "react";
import { View, Text } from "react-native";
import { StackParamProps } from "../navigation/StackParamList";

export default function ({ navigation, route }: StackParamProps<"Profile">) {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
