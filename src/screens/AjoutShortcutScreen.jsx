import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View, Text, TextInput, ScrollView, Button, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AjoutShortcutScreen(props) {
  const { categories, software } = props.route.params;

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((c) => <Picker.Item key={c.id} label={c.name} value={c["@id"]} />);

  const [category, setCategory] = useState([]);

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s["@id"]} />);

  const [soft, setSoft] = useState([]);

  const [title, setTitle] = useState("");
  const [windows, setWindows] = useState();
  const [mac, setMac] = useState("");
  const [linux, setLinux] = useState("");
  const [context, setContext] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView>
      <View style={styles.menu}>
        <Text style={styles.text}>Catégories</Text>
        <Picker
          selectedValue={category}
          onValueChange={(value, index) => setCategory(value)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Choisir une catégorie" value="Unknown" />
          {categoriesJsx}
        </Picker>
        <Text style={styles.text}>Logiciel</Text>
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
          <Text style={styles.txtForm}>Titre</Text>
          <TextInput style={styles.saisie} onChangeText={setTitle}></TextInput>
        </View>
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
        <View style={styles.shortcutImageContainer}>
          <Text style={styles.shortcutPickImage} onPress={pickImage}>
            Choisir une image
          </Text>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                borderRadius: 10,
                marginBottom: 20,
                width: 250,
                height: 250,
              }}
            />
          )}
        </View>
        <Button
          color="#f4511e"
          title="Ajouter"
          onPress={function () {
            // const { img } = fetch(process.env.API_URL + "media_objects", {
            //   method: "POST",
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(),
            // });

            const shortcut = {
              title: title,
              windows: windows,
              macos: mac,
              linux: linux,
              context: context,
              description: description,
              software: soft,
              categories: [category],
            };
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: "100%",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 40,
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
  shortcutImageContainer: {
    display: "flex",
    alignItems: "center",
  },
  shortcutPickImage: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    width: "auto",
    backgroundColor: "#f4511e",
    borderRadius: 10,
    fontWeight: "bold",
    color: "white",
  },
});
