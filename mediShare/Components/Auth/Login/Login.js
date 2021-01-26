import React from "react";

import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.innerContainer}>
        <TextInput placeholder="USerId" style={styles.inputField} />
        <TextInput placeholder="Password" style={styles.inputField} />
        <Button title="Login" color="#487e95" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    padding: 20,
    fontSize: 30,
    backgroundColor: "#62959c",
  },
  innerContainer: {
    padding: 15,
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    textTransform: "uppercase",
  },
  inputField: {
    borderWidth: 1,
    backgroundColor: "#a6f0c6",
    padding: 8,
    margin: 2,
    borderRadius: 2,
  },
});
