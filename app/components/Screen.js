import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style, color }) {
  return (
    <SafeAreaView style={[styles.container, style, { backgroundColor: color }]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
