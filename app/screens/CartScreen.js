import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppFlatListCart from "../components/AppFlatListCart";
import WideButton from "../components/WideButton";
import data from "../config/data";

function CartScreen(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <Screen style={styles.screen}>
      <LinearGradient
        style={styles.gradient}
        colors={[
          colors.white,
          colors.lighterMedium,
          colors.lighterMedium,
          colors.lighterMedium,
          colors.light,
        ]}
      >
        {data && (
          <View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Cart</Text>
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
          </View>
        )}

        {!data && (
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Cart is empty</Text>
          </View>
        )}
      </LinearGradient>
    </Screen>
  );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
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
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
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
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  empty: {
    fontSize: 25,
  },
});

export default CartScreen;
