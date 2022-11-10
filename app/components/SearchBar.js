import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.icon}
        name="search"
        size={30}
        color={colors.mediumLight}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.mediumLight}
        placeholder="Search..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    height: 50,
    // width: "100%",
    flex: 1,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SearchBar;
