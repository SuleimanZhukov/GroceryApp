import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "../components/Icon";
import { LinearGradient } from "expo-linear-gradient";

import AppFlatListHorizontal from "../components/AppFlatListHorizontal";
import data from "../config/data";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import colors from "../config/colors";
import routes from "../navigation/routes";

function HomeScreen({ navigation }) {
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
            data={data[0]}
            onPress={() => console.log("good")}
          />
          <AppFlatListHorizontal
            label="Vegetables"
            data={data[1]}
            onPress={() => console.log("good")}
          />
          <AppFlatListHorizontal
            label="Meats"
            data={data[2]}
            onPress={() => console.log("good")}
          />
          <AppFlatListHorizontal
            label="Breads"
            data={data[3]}
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
