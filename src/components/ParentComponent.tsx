import React from "react";
import { View, Text } from "react-native";
import { Network } from "../services/network.service";

export default function ParentComponent() {
  const networkContext = React.useContext(Network.Context);
  console.log(networkContext);

  return (
    <View>
      <Text>Parent Component</Text>
      {networkContext.isConnected ? (
        <Text>Network Connected</Text>
      ) : (
        <Text>No Internet Connection</Text>
      )}
    </View>
  );
}
