import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function App(props) {
  const [categories, setCategories] = useState([]);
  const [software, setSoftwares] = useState([]);

  useEffect(() => {
    console.log("fetch: " + process.env.API_URL + "categories");
    fetch(process.env.API_URL + "categories")
      .then((response) => response.json())
      .then((data) => setCategories(data["hydra:member"]))
      .catch((error) => console.log(error));

    console.log("fetch: " + process.env.API_URL + "software");
    fetch(process.env.API_URL + "software")
      .then((response) => response.json())
      .then((data) => setSoftwares(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texte}>Rechercher par :</Text>
      <View style={styles.recherche}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Rechercher par catégorie :", { categories: categories })}
        >
          <Text style={styles.buttonText}>Catégorie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Rechercher par logiciel :", { software: software })}
        >
          <Text style={styles.buttonText}>Logiciel</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.texte}>Ou bien :</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Ajouter un raccourci :")}>
        <Text style={styles.buttonText}>Ajouter un raccouci</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  recherche: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  texte: {
    fontSize: 25,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f4511e",
    padding: 30,
    margin: 20,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
