import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppFlatListCart from "../components/AppFlatListCart";
import WideButton from "../components/WideButton";
import data from "../config/data";
import CartCard from "../components/CartCard";

function CartScreen(props) {
  return (
    <Screen style={styles.screen}>
      <LinearGradient
        colors={[
          colors.white,
          colors.lighterMedium,
          colors.lighterMedium,
          colors.lighterMedium,
          colors.light,
        ]}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <MaterialIcons
              style={styles.arrowBack}
              name="arrow-back-ios"
              size={30}
              color={colors.mediumLight}
            />
            <Text style={styles.title}>My Cart</Text>
          </View>
          <View style={styles.flatListContainer}>
            <AppFlatListCart data={data[0]} numberOfColumns={0} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideButton
            style={styles.wideButton}
            title="Checkout"
            onPress={() => console.log("checked")}
          />
        </View>
      </LinearGradient>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: "100%",
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    flex: 2.6,
  },
  arrowBack: {
    marginLeft: 20,
    alignSelf: "center",
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  wideButton: {
    bottom: 25,
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartScreen;
