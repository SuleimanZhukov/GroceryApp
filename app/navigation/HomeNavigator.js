import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const HomeNavigator = (props) => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ThisHomeScreen" component={HomeScreen} />
    <Stack.Screen name={routes.CATEGORIES} component={CategoryScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
