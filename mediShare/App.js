import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeRouter, Route } from "react-router-native";
import About from "./Components/Screen/About/About";
import Profile from "./Components/Screen/Profile/Profile";
import Home from "./Components/Screen/Home/Home";

import Navigation from "./Components/Screen/Navigation/Navigation";
import SplashScreen from "./Components/Screen/SplashScreen/SplashScreen";
import Auth from "./Components/Auth/Auth";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />

        {/* <Navigation />
        <SplashScreen />
        <View style={styles.container}>
          <Text style={{ color: "#ffff" }}>Welcome to MediProfiler</Text>
        </View>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});

export default App;
