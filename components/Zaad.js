import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import ExchangeButtons from "./ExchangeButtons";

const telephoneNumber = "tel:+33333";
const Zaad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBg}>
        <Image source={require("../assets/zaad.png")} style={styles.img} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 30,
        }}
      >
        <ExchangeButtons url={telephoneNumber} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    resizeMode: "cover",
  },
});
export default Zaad;
