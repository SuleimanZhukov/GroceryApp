import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import Screen from "./app/components/Screen";
import BuyCard from "./app/components/BuyCard";
import CartCard from "./app/components/CartCard";

export default function App() {
  return (
    <Screen color="#eee">
      <CartCard
        title="Bananas"
        subtitle="Organic"
        price="4.95"
        itemsCount="2"
        image={require("./app/assets/banana.png")}
      />
      <BuyCard
        title="Bananas"
        subtitle="Organic"
        price="4.95"
        image={require("./app/assets/banana.png")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
