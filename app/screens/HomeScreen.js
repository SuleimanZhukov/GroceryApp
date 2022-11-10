import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import Screen from "../components/Screen";

function HomeScreen(props) {
  return (
    <Screen>
      <Text style={{ alignSelf: "center" }}>Hello World...</Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
