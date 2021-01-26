import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Registration from "../../Auth/Register/Registration/Registration";
import DoctorRegistration from "../DoctorRegistration/DoctorRegistration";
import OrgnizationRegistration from "../OrgnizationRegistration/OrgnizationRegistration";
import UserRegistration from "../UserRegistration/UserRegistration";

const Home = () => {
  return (
    <>
      <NativeRouter>
        <View>
          <Registration />
        </View>
        <Route path="/userregistration" component={UserRegistration} />
        <Route
          path="/organizationregistration"
          component={OrgnizationRegistration}
        />
        <Route path="/doctorregistration" component={DoctorRegistration} />
      </NativeRouter>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default Home;
