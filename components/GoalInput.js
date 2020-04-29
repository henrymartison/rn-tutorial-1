import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ onAddPress, visible, onCancel }) => {
  const [inputText, setInputText] = useState("");

  const onChangeInputText = text => {
    setInputText(text);
  };

  const onAddGoalHandler = () => {
    onAddPress(inputText);
    setInputText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.header}>
        <Button
          title="Cancel"
          color="tomato"
          style={styles.button}
          onPress={onCancel}
        />
        <TextInput
          placeholder="Course Goals..."
          style={styles.textInput}
          onChangeText={onChangeInputText}
          value={inputText}
          // returnKeyType="go"
          returnKeyLabel="Add"
        />
        <Button title="Add" style={styles.button} onPress={onAddGoalHandler} />
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  textInput: {
    borderColor: "#a8a8a8",
    borderWidth: 0.5,
    flex: 1,
    padding: 10,
    marginHorizontal: 18
  },
  button: {
    flex: 1
  }
});
