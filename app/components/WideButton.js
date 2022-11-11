import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

import colors from "../config/colors";

function WideButton({ title, style, onPress }) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={colors.lighterMedium}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 60,
    width: "100%",
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default WideButton;
