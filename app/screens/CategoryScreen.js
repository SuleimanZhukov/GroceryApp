import React from "react";
import { View, StyleSheet, FlatList, TouchableHighlight } from "react-native";

import AppFlatListVertical from "../components/AppFlatListVertical";
import CategoryCard from "../components/CategoryCard";
import Screen from "../components/Screen";
import WideButton from "../components/WideButton";
import colors from "../config/colors";

function CategoryScreen({ data, onPress }) {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(product) => product.title}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              image={item.image}
              onPress={() => console.log()}
            />
          )}
        />
      </View>
      <View style={styles.wideButton}>
        <WideButton title="Cancel" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wideButton: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default CategoryScreen;
