import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./app/screens/HomeScreen";
import Screen from "./app/components/Screen";
import BuyCard from "./app/components/BuyCard";
import CartCard from "./app/components/CartCard";
import SearchBar from "./app/components/SearchBar";
import CartScreen from "./app/screens/CartScreen";
import WideButton from "./app/components/WideButton";
import ItemScreen from "./app/screens/ItemScreen";
import CategoryCard from "./app/components/CategoryCard";
import CategoryScreen from "./app/screens/CategoryScreen";
import categoryData from "./app/config/categoryData";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <CategoryScreen data={categoryData} />
    // <Screen>
    //   <CategoryCard
    //     title="Fruits"
    //     image="https://www.pngarts.com/files/12/Red-Apple-Fruit-PNG-High-Quality-Image.png"
    //   />
    // </Screen>
    // <ItemScreen />
    // <CartScreen />
    // <HomeScreen />
    // <Screen color="#eee">
    //   <CartCard
    //     title="Bananas"
    //     subtitle="Organic"
    //     price="4.95"
    //     itemsCount="2"
    //     image={require("./app/assets/banana.png")}
    //   />
    //   <SearchBar />
    //   <BuyCard
    //     title="Bananas"
    //     subtitle="Organic"
    //     price="4.95"
    //     image={require("./app/assets/banana.png")}
    //   />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
  },
});
