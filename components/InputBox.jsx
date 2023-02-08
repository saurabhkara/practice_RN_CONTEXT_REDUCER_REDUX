import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import COLORS from "../utility/colors";

const InputBox = ({
  label,
  iconName,
  password,
  error,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.input,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          size={22}
          style={{ color: COLORS.darkBlue, marginRight: 10 }}
        />
        <TextInput
          style={styles.textInput}
          {...props}
          autoCorrect={false}
          secureTextEntry={hidePassword}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() =>setIsFocused(false)}
        />
        {password && (
          <Icon
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            style={{ color: COLORS.darkBlue }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    // height:70,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginVertical: 5,
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginVertical: 5,
    height: 55,
    paddingHorizontal: 10,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
