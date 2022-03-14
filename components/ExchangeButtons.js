import React, { useCallback } from "react";
import { View, Alert, Linking } from "react-native";
import { Button } from "react-native-paper";

const ExchangeButtons = ({ url }) => {
  const intent = "android.intent.action.ACTION_CALL";
  const handlePress = useCallback(async () => {
    const supported = await Linking.sendIntent(intent, url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Cannot open phone app, please allow permissions");
    }
  }, [intent, url]);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        mode="contained"
        onPress={handlePress}
        labelStyle={{ color: "#fff" }}
      >
        Sarifo Dollar
      </Button>
      <Button
        mode="contained"
        onPress={handlePress}
        labelStyle={{ color: "#fff" }}
      >
        Sarifo Shilling
      </Button>
    </View>
  );
};

export default ExchangeButtons;
