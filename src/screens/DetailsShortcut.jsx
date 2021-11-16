import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function DetailsShortcut(props) {
  const { shortcut } = props.route.params;

  const categoriesShortcutJsx = shortcut.categories.map((c) => (
    <Text key={c.id} style={styles.category}>
      {c.name}
    </Text>
  ));

  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>{shortcut.title}</Text>
        <Text style={styles.software}>{shortcut.software.name}</Text>
        <View>{categoriesShortcutJsx}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  software: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#0722e8",
    backgroundColor: "#7a89f5",
    borderRadius: 7,
    padding: 2,
    margin: 5,
  },
  category: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#e0f01d",
    backgroundColor: "#f1fa81",
    borderRadius: 7,
    padding: 2,
    margin: 5,
  },
});
