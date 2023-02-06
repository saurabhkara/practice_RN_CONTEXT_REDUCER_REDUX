import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Board from "./components/Board";
// import ContextWrapper from "./context/ContextWrapper";
import store from "./redux/store";
import { Provider } from "react-redux";
import CartScreen from "./screens/CartScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import Form from "./screens/Form";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Jai Shree Krishna </Text>
        <StatusBar style="auto" />
        <Board />
      </View> */}

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="cart" component={CartScreen} />
          <Stack.Screen name="form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
