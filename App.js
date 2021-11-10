import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import LogicielScreen from "./src/screens/LogicielScreen";
import AjoutShortcutScreen from "./src/screens/AjoutShortcutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rechercher par catégorie :" component={CategoryScreen} />
        <Stack.Screen name="Rechercher par logiciel :" component={LogicielScreen} />
        <Stack.Screen name="Ajouter un raccourci :" component={AjoutShortcutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
