import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login/Login";
import Registeration from "./Register/Registration/Registration";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registeration"
        component={Registeration}
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
