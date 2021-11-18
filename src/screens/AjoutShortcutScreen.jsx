import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View, Text, TextInput, ScrollView, Button } from "react-native";

export default function AjoutShortcutScreen(props) {
  const { categories, software } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((c) => <Picker.Item key={c.id} label={c.name} value={c["@id"]} />);

  const [category, setCategory] = useState("Unknown");

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s["@id"]} />);

  const [soft, setSoft] = useState("Unknown");
  const [windows, setWindows] = useState([]);
  const [mac, setMac] = useState("");
  const [linux, setLinux] = useState("");
  const [context, setContext] = useState("");
  const [description, setDescription] = useState([]);

  return (
    <View style={styles.menu}>
      <ScrollView>
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
        <View style={styles.cardForm}>
          <Text style={styles.txtForm}>Windows</Text>
          <TextInput style={styles.saisie} onChangeText={setWindows}></TextInput>
        </View>
        <View style={styles.cardForm}>
          <Text style={styles.txtForm}> Mac</Text>
          <TextInput style={styles.saisie} onChangeText={setMac}></TextInput>
        </View>
        <View style={styles.cardForm}>
          <Text style={styles.txtForm}>Linux</Text>
          <TextInput style={styles.saisie} onChangeText={setLinux}></TextInput>
        </View>
        <View style={styles.context}>
          <TextInput placeholder="Context" onChangeText={setContext}></TextInput>
        </View>
        <View style={styles.description}>
          <TextInput placeholder="Description" onChangeText={setDescription}></TextInput>
        </View>
        <Button
          // color="#f4511e"
          title="Ajouter"
          onPress={function () {
            console.log("bonjoue");
            const shortcut = {
              title: "test Quentin",
              windows: windows,
              macos: mac,
              linux: linux,
              context: context,
              description: description,
              software: soft,
              categories: [category],
            };
            console.log(shortcut);
            fetch(process.env.API_URL + "shortcuts", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(shortcut),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }}
        />
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
    marginVertical: 10,
    width: 300,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  cardForm: {
    marginBottom: 15,
    flexDirection: "row",
  },
  txtForm: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "lightgray",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#6d6875",
    width: 80,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  saisie: {
    width: 230,
    borderWidth: 1,
    borderColor: "#6d6875",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    paddingLeft: 10,
  },
  context: {
    borderWidth: 1,
    borderRadius: 7,
    width: 310,
    marginBottom: 15,
    height: 50,
    justifyContent: "center",
  },
  description: {
    borderWidth: 1,
    borderRadius: 7,
    width: 310,
    marginBottom: 15,
    height: 100,
    justifyContent: "center",
  },
  // btn: {
  //   color: "#f4511e",
  // },
});
