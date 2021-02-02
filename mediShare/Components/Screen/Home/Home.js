import React from "react";
import {
  ImagePropTypes,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeRouter, Route } from "react-router-native";
import RegistrationScreen from "../Register/Registration/RegistrationScreen";
import DoctorRegistration from "../DoctorRegistration/DoctorRegistration";
import OrgnizationRegistration from "../OrgnizationRegistration/OrgnizationRegistration";
import UserRegistration from "../UserRegistration/UserRegistration";
import LoginScreen from "../Login/LoginScreen";
import SearchBar from "../Search/search";

const Home = () => {
  return (
    <>
      <NativeRouter>
        <ScrollView>
          <View>
            <RegistrationScreen />
            <LoginScreen />
            <SearchBar />
          </View>
          <Route path="/userregistration" component={UserRegistration} />
          <Route
            path="/organizationregistration"
            component={OrgnizationRegistration}
          />
          <Route path="/doctorregistration" component={DoctorRegistration} />
        </ScrollView>
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
