import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: "https://www.w3schools.com/w3css/img_avatar3.png" }}
          style={styles.image}
        />
        <Text style={styles.header}>Profile</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>like</Text>
        </View>
        <View>
          <Text>comment</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#184d47",
    width: "100%",
    height: "50%",
    padding: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});

export default Profile;
