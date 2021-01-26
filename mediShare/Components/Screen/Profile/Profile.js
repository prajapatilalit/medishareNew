import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
const Profile = () => {
  return (
    <View>
      <Text style={styles.header}>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default Profile;
