import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

// import NetworkConnectionContext from "./src/services/networkService";
import { Network } from "./src/services/network.service";
import RoleMenuStack from "./src/navigation";

export default function App() {
  const networkContext = Network.useNetwork();

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <NetworkConnectionContext>
					<RoleMenuStack />
				</NetworkConnectionContext>  */}
        <Network.Context.Provider value={networkContext}>
          <RoleMenuStack />
        </Network.Context.Provider>
      </SafeAreaView>
    </ApplicationProvider>
  );
}
