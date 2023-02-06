import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { getProducts } from "../redux/actioncCreator";
import { useSelector, useDispatch } from "react-redux";

const CartScreen = () => {
    
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <View>
      {cart.map((item, index) => {
        return (
          <View key={index}>
            <Text>cart Item</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CartScreen;
