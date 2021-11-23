import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CardShortcut(props) {
  const { shortcut, onPress } = props;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.titleCard}>{shortcut.title}</Text>
        <Text style={styles.software}>{shortcut.software.name}</Text>
        <View>
          {shortcut.categories.map((c) => (
            <Text key={c.id} style={styles.category}>
              {c.name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f7b7a3",
    marginBottom: 3,
    borderWidth: 3,
    borderColor: "#f4511e",
    alignItems: "center",
    borderRadius: 7,
    padding: 5,
    marginBottom: 15,
  },
  titleCard: {
    fontSize: 18,
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
    width: 300,
  },
  category: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#e0f01d",
    backgroundColor: "#f1fa81",
    borderRadius: 7,
    padding: 2,
    margin: 5,
    width: 300,
  },
});
