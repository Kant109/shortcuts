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
        <Text style={styles.card}>
          <Text style={styles.txtGras}>Windows : </Text>
          {shortcut.windows}
        </Text>
        <Text style={styles.card}>
          <Text style={styles.txtGras}>Mac : </Text>
          {shortcut.macos}
        </Text>
        <Text style={styles.card}>
          <Text style={styles.txtGras}>Linux : </Text>
          {shortcut.linux}
        </Text>
        <Text style={styles.card}>Ici image mais plus tard</Text>
        <View style={styles.card}>
          <Text style={styles.txtGras}>Contexte : </Text>
          <Text>{shortcut.context}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.txtGras}>Description : </Text>
          <Text>{shortcut.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
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
  txtGras: {
    fontWeight: "bold",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
  },
});
