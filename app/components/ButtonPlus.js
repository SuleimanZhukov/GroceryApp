import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ButtonPlus({ style, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.dark} onPress={onPress}>
      <View style={[styles.container, style]}>
        <MaterialCommunityIcons name="plus" color={colors.white} size={30} />
      </View>
    </TouchableHighlight>
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
