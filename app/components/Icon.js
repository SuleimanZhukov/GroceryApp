import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({ style, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lighterMedium} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Ionicons name="options" size={30} color={colors.mediumLight} />
      </View>
    </TouchableHighlight>
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
