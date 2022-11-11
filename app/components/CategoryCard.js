import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

function CategoryCard({ title, image, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={colors.lighterMedium}
        onPress={onPress}
      >
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableHighlight>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 120,
    alignItems: "center",
    margin: 50,
  },
  image: {
    borderRadius: 25,
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default CategoryCard;
