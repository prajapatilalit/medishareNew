import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/Login/LoginScreen";
// import RegisterationScreen from "../Screen/Register/Registration/RegistrationScreen";
import RegisterScreen from "../Screen/UserRegistration/UserRegistration/";

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
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Patient Registeration",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
