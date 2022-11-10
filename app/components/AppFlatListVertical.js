import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import BuyCard from "./BuyCard";

function AppFlatListVertical({ data, numberOfColumns }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={numberOfColumns}
        keyExtractor={(product) => product.title}
        renderItem={({ item }) => (
          <BuyCard
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            image={item.image}
            marginHorizontal={23}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AppFlatListVertical;
