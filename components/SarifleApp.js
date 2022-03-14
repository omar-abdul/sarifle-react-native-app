import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "./Header";
import Zaad from "./Zaad";

const Sarifle = () => {
  return (
    <View style={styles.container}>
      <Header title={"Sarifle Awkoombe"} />
      <Zaad />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default Sarifle;
