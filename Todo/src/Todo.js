import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from "./containers/VisibleTodos";

class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Todo;
