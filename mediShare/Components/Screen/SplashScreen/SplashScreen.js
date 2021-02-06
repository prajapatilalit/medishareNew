import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  setTimeout(() => {
    setAnimating(false);
    navigation.navigate("Auth");
  }, 3000);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(false);
  //     //Check if user_id is set or not
  //     //If not then send for Authentication
  //     //else send to Home Screen
  //     // AsyncStorage.getItem("user_id").then((value) =>
  //     //   navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes")
  //     // );
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../Images/logo1.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>medishare</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  image: {
    width: 170,
    height: 170,
    margin: 30,
    borderRadius: 100,
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    textTransform: "uppercase",
    textShadowColor: "#ffff",
    color: "#312c51",
    letterSpacing: 1,
    fontWeight: "700",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
