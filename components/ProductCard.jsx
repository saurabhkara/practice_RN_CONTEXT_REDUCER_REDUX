import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/reducer";


const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { item: itemObj } = item;

  return (
    <View style={styles.container}>
      <View style={styles.prodImage}>
        <Image
          style={{height:'100%', width:'100%'}}
          source={{ uri: itemObj.image }}
          objectFit="contain"
        />
      </View>
      <View style={{width:'100%'}}>
        <Text style={{ marginHorizontal:10 }} numberOfLines={1}>
          {itemObj.title.slice(0,20)}..
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addProducts(itemObj));
          }}
        >
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center",
    width: 180,
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
    backgroundColor: "#E3FBFA",
    borderRadius: 8,
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:5,
  },
  prodImage: {
    height: 150,
    width: 150,
    padding: 5,
    alignItems: "center",
  },
});
