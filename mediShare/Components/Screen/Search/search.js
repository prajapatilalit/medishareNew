import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from "react-native";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [goalText, setGoalText] = useState([]);

  const inputHandler = (enteredText) => {
    setInputText(enteredText);
  };

  const addTextHandler = () => {
    setGoalText((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: inputText },
    ]);
  };
  const removeHandler = (goalId) => {
    setGoalText((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.searchContainer}>
      <View>
        <TextInput
          placeholder="search"
          style={styles.inputBox}
          onChangeText={inputHandler}
          value={inputText}
        />
        <Button title="Search" onPress={addTextHandler} color="#276678" />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalText}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "column",
  },
  inputBox: {
    padding: 10,
    borderWidth: 2,
    marginVertical: 10,
  },
  listItem: {
    padding: 10,
    borderWidth: 2,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
});
