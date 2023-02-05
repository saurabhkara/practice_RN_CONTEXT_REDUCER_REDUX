import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCard = ({ item }) => {
  console.log(item.item);
  return (
    <View style={styles.container}>

      <Text>{item.item.title}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems:'center',
    width: 170,
    height: 220,
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor:'#E3FBFA'
  },
});
