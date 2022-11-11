import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import ItemsCount from "../components/ItemsCount";
import WideButton from "../components/WideButton";
import CategoryCard from "../components/CategoryCard";

function ItemScreen({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={require("../assets/banana.png")} />
        <View style={styles.titleContainer}>
          <ItemsCount
            countText="$4.95"
            style={styles.itemsCount}
            textStyle={styles.textItemCount}
          />
          <Text style={styles.title}>Bananas</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <WideButton
          style={styles.wideButton}
          title="+ Add to cart"
          onPress={() => console.log("checked")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "45%",
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerContainer: {
    marginTop: 30,
    flexDirection: "row",
    height: 250,
  },
  image: {
    marginTop: 30,
    marginLeft: 20,
    width: 200,
    height: 150,
    flex: 1,
  },
  titleContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 50,
    alignItems: "center",
  },
  itemsCount: {
    backgroundColor: colors.lightPrimary,
    height: 35,
    width: 100,
    borderRadius: 23,
    marginTop: 20,
  },
  textItemCount: {
    color: colors.green,
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
    width: 100,
  },
  buttonContainer: {
    marginHorizontal: 20,
    bottom: 30,
  },
});

export default ItemScreen;
