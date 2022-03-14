import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Text } from "react-native-paper";

export const Header = ({ title }) => {
  return (
    <Appbar.Header
      style={{ textAlign: "center" }}
      dark={false}
      statusBarHeight={10}
    >
      <Appbar.Content
        title={<Title title={title} />}
        style={{ alignItems: "center", justifyContent: "center" }}
      />
    </Appbar.Header>
  );
};
const Title = ({ title }) => <Text>{title}</Text>;
const styles = StyleSheet.create({
  header: {},
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
