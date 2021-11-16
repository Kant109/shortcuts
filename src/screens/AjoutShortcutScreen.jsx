import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View, Text } from "react-native";

export default function AjoutShortcutScreen(props) {
  const { categories, software } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((c) => <Picker.Item key={c.id} label={c.name} value={c.name} />);

  const [category, setCategory] = useState("Unknown");

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.name} />);

  const [soft, setSoft] = useState("Unknown");

  return (
    <View style={styles.menu}>
      <Text style={styles.text}>Logiciel</Text>
      <Picker
        selectedValue={category}
        onValueChange={(value, index) => setCategory(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Choisir une catégorie" value="Unknown" />
        {categoriesJsx}
      </Picker>
      <Text style={styles.text}>Catégories</Text>
      <Picker
        selectedValue={soft}
        onValueChange={(value, index) => setSoft(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Choisir un logiciel" value="Unknown" />
        {softwareJsx}
      </Picker>
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
  text: {
    fontSize: 20,
  },
});
