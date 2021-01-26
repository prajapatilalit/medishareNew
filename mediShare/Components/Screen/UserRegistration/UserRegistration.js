import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const UserRegistration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>UserRegistration</Text>
      <View style={styles.innerContainer}>
        <TextInput placeholder="UserId" style={styles.inputField} />
        <TextInput placeholder="UserName" style={styles.inputField} />
        <TextInput placeholder="UserEmail" style={styles.inputField} />
        <TextInput placeholder="Password" style={styles.inputField} />
        <TextInput placeholder="Confirmpassword" style={styles.inputField} />
        <TextInput placeholder="UserAddress" style={styles.inputField} />
        <Button title="UserRegistration" />
      </View>
    </View>
  );
};
export default UserRegistration;

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
