import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import BuyCard from "./BuyCard";

function AppFlatListHorizontal({ label, data, onPress, onPressCard }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{label}</Text>
        <TouchableHighlight underlayColor={colors.dark} onPress={onPress}>
          <Text style={styles.button}>View More</Text>
        </TouchableHighlight>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(product) => product.title}
        renderItem={({ item }) => (
          <BuyCard
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            image={item.image}
            count={item.count}
            category={item.category}
            marginHorizontal={10}
            onPressCard={onPressCard}
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
  textContainer: {
    marginTop: 35,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
  },
  button: {
    marginRight: 10,
    color: colors.primary,
  },
});

export default AppFlatListHorizontal;
