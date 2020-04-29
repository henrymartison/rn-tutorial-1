import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity
} from "react-native";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const _onAddPress = goalTitle => {
    if (goalTitle.length === 0) {
      return alert("Please add a text");
    }

    setGoals(currentGoals => [
      ...currentGoals,
      { uuid: Math.random().toString(), value: goalTitle }
    ]);
    setIsModalVisible(false);
  };

  const onDeleteItem = id => {
    setGoals(currentItemVal => {
      return currentItemVal.filter(item => item.uuid !== id);
    });
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const _renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onDeleteItem(item.uuid)} id={item.uuid}>
        <View style={styles.listItem}>
          <Text style={styles.listText}>{item.value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Button title="Add New Item" onPress={() => setIsModalVisible(true)} />
      <GoalInput
        visible={isModalVisible}
        onAddPress={_onAddPress}
        onCancel={onCloseModal}
      />
      <FlatList
        style={styles.content}
        data={goals}
        renderItem={_renderListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderColor: "#a8a8a8",
    borderWidth: 0.5,
    flex: 1,
    padding: 10
  },
  button: {},
  content: {},
  listItem: {
    padding: 20,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 0.5
    // backgroundColor: "#a8a8a8"
  },
  listText: {
    fontSize: 18,
    fontWeight: "500"
  }
});
