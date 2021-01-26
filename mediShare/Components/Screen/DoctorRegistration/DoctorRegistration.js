import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, AppRegistry } from "react-native";

const DoctorRegistration = () => {
  return (
    <View>
      <Text>DoctorRegistration</Text>
      <StatusBar style="auto" />
    </View>
  );
};

AppRegistry.registerComponent("DoctorRegistration", () => DoctorRegistration);
export default DoctorRegistration;
