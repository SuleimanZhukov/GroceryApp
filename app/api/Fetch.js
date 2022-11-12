import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { firebase } from "./config";

function Fetch(props) {
  const [data, setData] = useState();
  const storeRef = firebase.firestore().collection("store");

  useEffect;

  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {},
});

export default Fetch;
