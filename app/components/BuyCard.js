import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import ButtonPlus from "./ButtonPlus";

function BuyCard({ title, subtitle, price, image, marginHorizontal }) {
  return (
    <View style={[styles.container, { marginHorizontal: marginHorizontal }]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>{`$${price}`}</Text>
        <ButtonPlus style={styles.button} onPress={() => console.log("good")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    alignSelf: "center",
    height: 80,
    width: 120,
    top: 20,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    color: colors.black,
    fontSize: 16,
    marginTop: 30,
    marginLeft: 25,
  },
  subtitle: {
    marginLeft: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "100",
    color: colors.mediumLight,
    fontSize: 14,
  },
  bottomContainer: {
    marginTop: 5,
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    color: colors.black,
    fontSize: 16,
    flex: 1,
  },
  button: {
    marginRight: 10,
  },
});

export default BuyCard;
