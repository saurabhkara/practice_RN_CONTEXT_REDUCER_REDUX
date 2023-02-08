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
const Signup = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validation = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!data.email) {
      handleError("Please enter email", "email");
      valid = false;
    } else if (!data.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please enter valid email", "email");
      valid = false;
    }

    if (!data.name) {
      handleError("Please enter your name", "name");
      valid = false;
    }

    if (!data.phone) {
      handleError("Please enter your number", "phone");
      valid = false;
    }

    if (!data.password) {
      handleError("Please enter your password", "password");
      valid = false;
    } else if (data.password.length < 6) {
      handleError("Plase enter strong password", "password");
      valid = false;
    }

    if (valid) {
      registerData();
    }
  };

  const handleOnChange = (text, input) => {
    setData((prev) => ({ ...prev, [input]: text }));
  };

  const handleError = (text, input) => {
    setError((prev) => ({ ...prev, [input]: text }));
  };

  const registerData = () => {
    try {
      setIsLoading(true);
      AsyncStrorage.setItem("user", JSON.stringify(data));
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("login");
      }, 3000);
    } catch (err) {
      Alert.alert("error", "Something went wrong");
      setIsLoading(false);
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
          <Text style={styles.header}>Register</Text>
          <Text style={styles.title}>Enter your details to register</Text>
          <InputBox
            placeholder="Enter your email"
            label={"Email"}
            iconName={"email-outline"}
            error={error.email}
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleError(null, "email")}
          />
          <InputBox
            placeholder="Enter your full name"
            label={"Name"}
            iconName={"account-outline"}
            onChangeText={(text) => handleOnChange(text, "name")}
            error={error.name}
            onFocus={() => handleError(null, "name")}
          />
          <InputBox
            placeholder="Enter your phone number"
            label={"Phone"}
            iconName={"phone-outline"}
            onChangeText={(text) => handleOnChange(text, "phone")}
            error={error.phone}
            onFocus={() => handleError(null, "phone")}
            keyboardType="numeric"
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
          <Button title="Resister" onPress={validation} />
          <Text
            onPress={() => navigation.navigate("login")}
            style={{ alignSelf: "center", marginVertical: 15, fontSize: 16 }}
          >
            Already have account?{" "}
            <Text style={{ color: COLORS.blue }}>Login</Text>
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
export default Signup;
