import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import NetworkConnectionContext from "./src/services/networkService";

import { AppNavigator } from "./src/navigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <NetworkConnectionContext>
          <AppNavigator />
        </NetworkConnectionContext>
      </SafeAreaView>
    </ApplicationProvider>
  );
}

// import { Network } from "./src/services/network.service";
// const networkContext = Network.useNetwork();

{
  /* <Network.Context.Provider value={networkContext}>
  <AppNavigator />
</Network.Context.Provider>  */
}
