import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { removeProducts,increaseQty, decreaseQty} from "../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState({amount:0,item:0});
  useEffect(()=>{
    let cost = cart.reduce((acc,item)=>{
      acc.item = acc.item + item.quantity;
      acc.amount = acc.amount + item.quantity * item.price
      return acc;
    },{amount:0,item:0});
    setAmount(cost);
  },[cart])
  return (
    <View>
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: "pink",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "40%",
            height: 80,
            backgroundColor: "cyan",
            margin: 10,
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text>Total Items</Text>
          <Text style={{ fontSize: 25, fontWeight: "500" }}>{amount.item}</Text>
        </View>
        <View
          style={{
            width: "40%",
            height: 80,
            backgroundColor: "cyan",
            margin: 10,
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text>Total Amount</Text>
          <Text style={{ fontSize: 25, fontWeight: "500" }}>Rs {amount.amount.toFixed(1)}</Text>
        </View>
      </View>
      <Text style={{ alignSelf: "center", fontSize: 25, marginVertical: 10 }}>
        Cart Details
      </Text>
      {cart.map((item, index) => {
        return (
          <View
            key ={index}
            style={{
              flexDirection: "row",
              backgroundColor: "pink",
              height: 40,
              width: "100%",
              marginTop: 5,
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 25,
                width: 25,
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            />
            <View style={{ flexDirection: "row", marginLeft: 50 }}>
              <TouchableOpacity onPress={()=>dispatch(decreaseQty(item))}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "600",
                    marginHorizontal: 10,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                  marginHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text>
              <TouchableOpacity onPress={()=>dispatch(increaseQty(item))}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "600",
                    marginHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <Ionicons name="trash-bin"
              size={25}
              color="black"
              onPress={() =>dispatch(removeProducts(item))}
              style={{ marginLeft: 20 }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                alignSelf: "flex-end",
                marginLeft: 50,
              }}
            >
              {item.quantity * item.price}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CartScreen;
