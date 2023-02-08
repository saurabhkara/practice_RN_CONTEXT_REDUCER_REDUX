//import liraries
import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStrorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import COLORS from "../utility/colors";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

// create a component
const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validation = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!data.email) {
      handleError("Please enter email", "email");
      valid = false;
    }

    if (!data.password) {
      handleError("Please enter your password", "password");
      valid = false;
    }

    if (valid) {
      loginData();
    }
  };

  const handleOnChange = (text, input) => {
    setData((prev) => ({ ...prev, [input]: text }));
  };

  const handleError = (text, input) => {
    setError((prev) => ({ ...prev, [input]: text }));
  };

  const loginData = async () => {
    try {
      setIsLoading(true);
      let registeredUserData = await AsyncStrorage.getItem("user");
        registeredUserData =JSON.parse(registeredUserData);
      if(registeredUserData.email !==data.email ){
        setIsLoading(false);
        return Alert.alert("error", "Please input correct email");
      }else if(registeredUserData.password !==data.password){
        setIsLoading(false);
        return Alert.alert("error", "Please input correct password");
      }
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("main");
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      Alert.alert("error", "Something went wrong");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar
          barStyle={"dark-content"}
          hidden={false}
          backgroundColor={"white"}
          animated={true}
        />
        <Loader active={isLoading} />
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          automaticallyAdjustKeyboardInsets={true}
        >
          <Text style={styles.header}>Login</Text>
          <Text style={styles.title}>Enter your details to login</Text>
          <InputBox
            placeholder="Enter your email"
            label={"Email"}
            iconName={"email-outline"}
            error={error.email}
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleError(null, "email")}
          />
          
          
          <InputBox
            placeholder="Enter your password"
            label={"Password"}
            iconName={"lock-outline"}
            onChangeText={(text) => handleOnChange(text, "password")}
            password
            error={error.password}
            onFocus={() => handleError(null, "password")}
          />
          <Button title="Login" onPress={validation} />
          <Text
            onPress={() => navigation.navigate("signup")}
            style={{ alignSelf: "center", marginVertical: 15, fontSize: 16 }}
          >
            Don't have account?{" "}
            <Text style={{ color: COLORS.blue }}>Signup</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLORS.white,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    color: COLORS.grey,
    marginBottom: 20,
  },
});

//make this component available to the app
export default Login;
