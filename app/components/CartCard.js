import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firebase } from "../api/config";

import colors from "../config/colors";
import ItemsCount from "./ItemsCount";

const cartRef = firebase.firestore().collection("cart");

function CartCard({ title, subtitle, price, itemsCount, image, id }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <ItemsCount
          style={styles.items}
          countText={subtitle === "Organic" ? `${itemsCount}kg` : itemsCount}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            cartRef
              .doc(id)
              .delete()
              .then(() => {
                console.log("");
              });
          }}
        >
          <MaterialCommunityIcons
            style={styles.button}
            name="close"
            color={colors.mediumLight}
            size={30}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.price}>{`$${price}`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    alignSelf: "center",
    height: 80,
    width: 120,
    marginLeft: 10,
  },
  titleContainer: {
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    color: colors.black,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "100",
    color: colors.mediumLight,
    fontSize: 16,
  },
  items: {
    marginTop: 15,
  },
  bottomContainer: {
    width: 100,
    marginTop: 13,
    marginRight: 5,
    alignItems: "center",
  },
  button: {
    flex: 1,
    marginLeft: 20,
  },
  price: {
    alignSelf: "flex-end",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    color: colors.black,
    fontSize: 16,
    marginBottom: 20,
    marginRight: 30,
    textAlign: "right",
  },
});

export default CartCard;
