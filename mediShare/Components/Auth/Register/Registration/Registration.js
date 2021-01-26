import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "react-router-native";

const Registration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/userregistration"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>UserRegistration</Text>
        </Link>
        <Link
          to="/doctorregistration"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>DoctorRegistration</Text>
        </Link>
        <Link
          to="/organizationregistration"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>OrganizationRegistration</Text>
        </Link>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 30,
  },
  nav: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navItem: {
    flex: 0,
    marginBottom: 2,
    backgroundColor: "#663f3f",
    padding: 30,
  },
  subNavItem: {
    padding: 5,
  },
});
