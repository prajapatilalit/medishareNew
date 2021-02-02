import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/Login/LoginScreen";
import RegisterationScreen from "../Screen/Register/Registration/RegistrationScreen";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterationScreen"
        component={RegisterationScreen}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
