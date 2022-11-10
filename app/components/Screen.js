import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, color }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    flex: 1,
  },
});

export default Screen;
