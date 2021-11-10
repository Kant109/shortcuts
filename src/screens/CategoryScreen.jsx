import React from "react";
import { Text, View } from "react-native";

export default function CategoryScreen(props) {
  const { categories } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((c) => <Text key={c.id}>{c.name}</Text>);

  return <View>{categoriesJsx}</View>;
}
