import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ButtonPlus({ style }) {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name="plus" color={colors.white} size={30} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonPlus;
