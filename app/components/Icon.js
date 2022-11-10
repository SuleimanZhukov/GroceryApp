import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Ionicons name="options" size={30} color={colors.mediumLight} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    marginVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Icon;
