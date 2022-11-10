import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import Icon from "../components/Icon";

import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";

function HomeScreen(props) {
  return (
    <Screen>
      <Text style={styles.text}>Grocery</Text>
      <View style={styles.searchContainer}>
        <SearchBar />
        <Icon style={styles.icon} />
      </View>
      <ScrollView>
        <FlatList />
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
});

export default HomeScreen;
