import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Sarifle from "./components/SarifleApp";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#27B88A",
      text: "#FFF",
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Sarifle />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
