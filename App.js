import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import Board from "./components/Board";
import ContextWrapper from "./context/ContextWrapper";

export default function App() {
  const [data, setData] = useState("Saurabh");

  return (
    <ContextWrapper>
      <View style={styles.container}>
        <Text>Jai Shree Krishna </Text>
        <StatusBar style="auto" />
        <Board />
      </View>
    </ContextWrapper>
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
