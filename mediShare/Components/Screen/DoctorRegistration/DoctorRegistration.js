import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DoctorRegistration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DoctorRegistration</Text>
      <View style={styles.innerContainer}>
        <TextInput placeholder="DoctorId" style={styles.inputField} />
        <TextInput placeholder="DoctorName" style={styles.inputField} />
        <TextInput placeholder="DoctorEmail" style={styles.inputField} />
        <TextInput placeholder="Password" style={styles.inputField} />
        <TextInput placeholder="Confirmpassword" style={styles.inputField} />
        <TextInput placeholder="DoctorAddress" style={styles.inputField} />
        <Button title="DoctorRegistration" />
      </View>
    </View>
  );
};
export default DoctorRegistration;

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
