import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actioncCreator";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  console.log("cart....", cart);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.header}>
        <Text style={styles.title}>Yes Shop</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("cart")}
          style={styles.cartContainer}
        >
          <View
            style={{
              height:20,
              width:20,
              backgroundColor: "cyan",
              borderRadius: 10,
              position:'absolute',
              justifyContent:'center',
              alignItems:'center',
              top:-2,
              right:-10,
              zIndex:-1,
            }}

          >
           <Text style={{fontSize:12,}}>{cart.length}</Text>
          </View>
          <AntDesign name="shoppingcart" size={30} color="black" />
          <Text style={styles.cartText}> Cart</Text>
          
        </TouchableOpacity>
      </View>
      <View style={{ height: "100%" }}>
        {isLoading ? (
          <View style={styles.loadingStyle}>
            <ActivityIndicator size={"large"} />
            <Text>Loading....</Text>
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ProductCard item={item} />}
            numColumns={2}
            horizontal={false}
            columnWrapperStyle={{ marginTop: 10 }}
            contentContainerStyle={{ alignItems: "center" }}
            ListFooterComponent={<View style={{ height: 100 }} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
  },
  cartContainer: {
    alignItems:'center',
    position:'relative',
  },
  cartText: {
    fontSize: 10,
  },
});
