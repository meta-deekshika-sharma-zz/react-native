import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder=">Add Note"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: "#eaeaea",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: "#de9595", padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderColor: "#f2f2e1"
  },
  textInput: {
    color: "black",
    fontSize: 14,
    height: 50,
    flex: 1,
    padding: 10
  },
  icon: {
    color: "#de9595",
    padding: 10
  }
});

export default connect()(AddTodo);
