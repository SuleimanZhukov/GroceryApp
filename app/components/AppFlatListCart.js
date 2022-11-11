import React from "react";
import { View, FlatList } from "react-native";

import CartCard from "./CartCard";

function AppFlatListCart({ data, numberOfColumns }) {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={numberOfColumns}
        keyExtractor={(product) => product.title}
        renderItem={({ item }) => (
          <CartCard
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            itemsCount={item.count}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

export default AppFlatListCart;
