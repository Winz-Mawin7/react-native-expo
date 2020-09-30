import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import FlashMessage, { showMessage } from "react-native-flash-message";

const NetworkConnectionContext = (props: any) => {
  const [networkConnection, setNetworkConnection] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkConnection(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, [networkConnection]);

  return (
    <>
      {props.children}
      {networkConnection ? null : <FlashMessage ref={noInternetMsg} />}
    </>
  );
};

const noInternetMsg = () => {
  showMessage({
    message: "No Internet Connection",
    type: "danger",
    icon: "warning",
    autoHide: false,
    hideOnPress: false,
    position: "top",
    // floating: true,
  });
};

export default NetworkConnectionContext;
