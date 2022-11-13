import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Keyboard,
  TouchableHighlight,
} from "react-native";
import { firebase } from "../api/config";

const cartRef = firebase.firestore().collection("cart");

import colors from "../config/colors";
import ButtonPlus from "./ButtonPlus";

function BuyCard({
  title,
  subtitle,
  price,
  image,
  count,
  category,
  marginHorizontal,
  onPressCard,
}) {
  let cartItems = [];
  return (
    <TouchableHighlight
      onPress={onPressCard}
      underlayColor={colors.lighterMedium}
    >
      <View style={[styles.container, { marginHorizontal: marginHorizontal }]}>
        <>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.price}>{`$${price}`}</Text>
            <ButtonPlus
              style={styles.button}
              onPress={() => {
                cartRef.onSnapshot((querySnapshot) => {
                  const comingData = [];
                  querySnapshot.forEach((doc) => {
                    const { title, subtitle, image, category, count, price } =
                      doc.data();
                    comingData.push({
                      id: doc.id,
                      title,
                      subtitle,
                      image,
                      category,
                      count,
                      price,
                    });
                  });
                  cartItems = comingData;
                });

                let bool = false;
                cartItems.forEach((item) => {
                  if (item.title === title) {
                    cartRef.doc(item.id).update({
                      price: item.price + price,
                      count: item.count + count,
                    });
                    bool = true;
                    return;
                  }
                });

                if (!bool) {
                  cartRef
                    .add({
                      title: title,
                      subtitle: subtitle,
                      price: price,
                      image: image,
                      category: category,
                      count: 1,
                    })
                    .then(() => {
                      Keyboard.dismiss();
                    });
                }
              }}
            />
          </View>
        </>
      </View>
    </TouchableHighlight>
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
