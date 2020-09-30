import { useState, useEffect, createContext } from "react";
import NetInfo from "@react-native-community/netinfo";

export interface INetwork {
  isConnected: boolean;
}

export class Network {
  static Context = createContext<INetwork>({ isConnected: false });

  static useNetwork = (): INetwork => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });
      return () => {
        unsubscribe();
      };
    }, [isConnected]);

    const networkContext: INetwork = { isConnected };

    return networkContext;
  };
}
