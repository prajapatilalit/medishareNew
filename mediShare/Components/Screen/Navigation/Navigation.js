import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { Link } from "react-router-native";

const Navigation = () => (
  <View style={styles.container}>
    <View style={styles.nav}>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Home</Text>
      </Link>
      <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>About</Text>
      </Link>
      <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Profile</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#487e95",
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

AppRegistry.registerComponent("Navigation", () => Navigation);
export default Navigation;
