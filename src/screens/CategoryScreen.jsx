import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { categories } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((c) => <Picker.Item key={c.id} label={c.name} value={c.name} />);

  const [category, setCategory] = useState("Unknown");

  return (
    <View style={styles.menu}>
      <Picker
        selectedValue={category}
        onValueChange={(value, index) => setCategory(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Choisir une catégorie" value="Unknown" />
        {categoriesJsx}
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
  choice: {
    backgroundColor: "red",
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
