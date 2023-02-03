import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Board from "./components/Board";
// import ContextWrapper from "./context/ContextWrapper";
import store from './redux/store'
import { Provider } from "react-redux";

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Jai Shree Krishna </Text>
        <StatusBar style="auto" />
        <Board />
      </View>
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
