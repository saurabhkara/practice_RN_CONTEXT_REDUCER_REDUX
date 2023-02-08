//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import COLORS from "../utility/colors";

// create a component
const Loader = ({ active = false }) => {
  const { height, width } = useWindowDimensions();

  return (
    active && (
      <View style={[styles.container, { width, height }]}>
        <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={COLORS.blue} />
        <Text>Loading ..</Text>
        </View>
      </View>
    )
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    justifyContent: "center",
    backgroundColor:'rgba(0,0,0,0.5)',
  },loader:{
    flexDirection:'row',
    backgroundColor:'white',
    paddingHorizontal:25,
    marginHorizontal:30,
    borderRadius:10,
    height:50,
    alignItems:'center',
    // justifyContent:'center'

  }
});

//make this component available to the app
export default Loader;
