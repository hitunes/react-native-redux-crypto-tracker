import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./src/Store";
import { Header } from "./src/components";
import CryptoContainer from "./src/components/CryptoContainer";

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
