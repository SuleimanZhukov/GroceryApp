import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, ImageEditor } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppFlatListCart from "../components/AppFlatListCart";
import WideButton from "../components/WideButton";
import { firebase } from "../api/config";

const cartRef = firebase.firestore().collection("cart");

function CartScreen(props) {
  const [items, setItems] = useState([]);

  const getData = async () => {
    cartRef.onSnapshot((querySnapshot) => {
      const comingData = [];
      querySnapshot.forEach((doc) => {
        const { title, subtitle, image, category, count, price } = doc.data();
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
      setItems(comingData);
    });
  };

  useEffect(() => {
    getData();
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
        {items && (
          <View>
            <ScrollView style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Cart</Text>
              </View>
              <View style={styles.flatListContainer}>
                <AppFlatListCart data={items} numberOfColumns={0} />
              </View>
            </ScrollView>
            <WideButton
              style={styles.wideButton}
              title="Checkout"
              onPress={() => {
                items.forEach((item) => {
                  cartRef
                    .doc(item.id)
                    .delete()
                    .then(() => {
                      console.log("");
                    });
                });
              }}
            />
          </View>
        )}

        {!items && (
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
  wideButton: {
    bottom: 25,
    flex: 1,
    position: "absolute",
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
