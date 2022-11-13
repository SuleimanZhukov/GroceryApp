import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

import colors from "../config/colors";

function WideButton({ title, style, onPress }) {
  return (
    <View style={[styles.ultimateContainer, style]}>
      <TouchableHighlight
        underlayColor={colors.lighterMedium}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  ultimateContainer: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default WideButton;
