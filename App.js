import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import LogicielScreen from "./src/screens/LogicielScreen";
import AjoutShortcutScreen from "./src/screens/AjoutShortcutScreen";
import DetailsShortcut from "./src/screens/DetailsShortcut";

const Stack = createNativeStackNavigator();

const styleNav = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styleNav}>
        <Stack.Screen name="Shortcuts" component={HomeScreen} options={styleNav} />
        <Stack.Screen name="Rechercher par catégorie :" component={CategoryScreen} />
        <Stack.Screen name="Rechercher par logiciel :" component={LogicielScreen} />
        <Stack.Screen name="Ajouter un raccourci :" component={AjoutShortcutScreen} />
        <Stack.Screen
          name="ShortcutScreen"
          component={DetailsShortcut}
          options={({ route }) => ({ title: route.params.shortcut.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
