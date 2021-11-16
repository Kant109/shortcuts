import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { software } = props.route.params;

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  const [soft, setSoft] = useState("Unknown");

  const [shortcut, setShortcut] = useState([]);

  const shortcutJsx = shortcut.map((s) => (
    <View key={s.id}>
      <Text>{s.title}</Text>
      <Text>{s.software.name}</Text>
      <View>
        {s.categories.map((c) => (
          <Text key={c.id}>{c.name}</Text>
        ))}
      </View>
    </View>
  ));

  return (
    <View style={styles.menu}>
      <ScrollView>
        <Picker
          selectedValue={soft}
          onValueChange={function (itemValue, itemIndex) {
            fetch(process.env.API_URL + "shortcuts?software.id=" + itemValue)
              .then((response) => response.json())
              .then((data) => setShortcut(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSoft(itemValue);
          }}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Choisir un logiciel" value="Ici l'affichage des raccourcis" />
          {softwareJsx}
        </Picker>
        {shortcutJsx}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
