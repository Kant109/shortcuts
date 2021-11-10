import React from "react";
import { Text, View } from "react-native";

export default function CategoryScreen(props) {
  const { software } = props.route.params;

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Text key={s.id}>{s.name}</Text>);

  return <View>{softwareJsx}</View>;
}
