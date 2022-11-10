import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ItemsCount({ text, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 60,
    backgroundColor: colors.skyblue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    color: colors.mediumLight,
  },
});

export default ItemsCount;
