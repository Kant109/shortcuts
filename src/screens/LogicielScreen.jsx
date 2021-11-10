import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { software } = props.route.params;

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.name} />);

  const [soft, setSoft] = useState("Unknown");

  return (
    <View style={styles.menu}>
      <Picker
        selectedValue={soft}
        onValueChange={(value, index) => setSoft(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Choisir une catégorie" value="Unknown" />
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
