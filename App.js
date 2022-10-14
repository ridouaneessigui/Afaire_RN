import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AfaireScreen from "./src/Screens/AfaireScreen";
import ActiveScreen from "./src/Screens/ActiveScreen";
import CompleteScreen from "./src/Screens/CompleteScreen";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Afaire" component={AfaireScreen} />
        <stack.Screen name="Active" component={ActiveScreen} />
        <stack.Screen name="Complete" component={CompleteScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
