import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "../components/Icon";
import { LinearGradient } from "expo-linear-gradient";

import AppFlatListHorizontal from "../components/AppFlatListHorizontal";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { firebase } from "../api/config";

const storeRef = firebase.firestore().collection("store");

function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);

  const getData = async () => {
    storeRef.onSnapshot((querySnapshot) => {
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
    <Screen>
      <LinearGradient
        colors={[colors.white, colors.light, colors.lighterMedium]}
      >
        <ScrollView style={styles.flatList}>
          <Text style={styles.text}>Grocery</Text>
          <View style={styles.searchContainer}>
            <SearchBar />
            <Icon
              style={styles.icon}
              onPress={() => navigation.navigate(routes.CATEGORIES)}
            />
          </View>
          <AppFlatListHorizontal
            label="Fruits"
            data={items.filter((item) => item.category === "fruits")}
            onPress={() => console.log("good")}
            onPressCard={() => console.log("")}
          />
          <AppFlatListHorizontal
            label="Vegetables"
            data={items.filter((item) => item.category === "vegetables")}
            onPress={() => console.log("good")}
          />
          <AppFlatListHorizontal
            label="Meats"
            data={items.filter((item) => item.category === "meats")}
            onPress={() => console.log("good")}
          />
          <AppFlatListHorizontal
            label="Breads"
            data={items.filter((item) => item.category === "breads")}
            onPress={() => console.log("good")}
          />
        </ScrollView>
      </LinearGradient>
    </Screen>
  );
}
const styles = StyleSheet.create({
  text: {
    marginHorizontal: 22,
    marginVertical: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
  searchContainer: {
    marginHorizontal: 22,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  flatList: {
    marginHorizontal: 13,
  },
});

export default HomeScreen;
