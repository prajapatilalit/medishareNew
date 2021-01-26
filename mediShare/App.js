import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route } from "react-router-native";
import About from "./Components/Screen/About/About";
import Profile from "./Components/Screen/Profile/Profile";
import Home from "./Components/Screen/Home/Home";

import Navigation from "./Components/Screen/Navigation/Navigation";

const App = () => {
  return (
    <NativeRouter>
      <Navigation />
      <View style={styles.container}>
        <Text style={{ color: "#ffff" }}>Welcome to MediProfiler</Text>
      </View>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});

export default App;
