import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, AppRegistry } from "react-native";

const UserRegistration = () => {
  return (
    <View>
      <Text>UserRegistration</Text>
      <StatusBar style="auto" />
    </View>
  );
};

AppRegistry.registerComponent("UserRegistration", () => UserRegistration);
export default UserRegistration;
