import React, { Component } from "react";
import { View, ScrollView, AsyncStorage, TextInput } from "react-native";
import styles from "./styles";
import { Appbar, Button } from "react-native-paper";

export default class Form extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        number: "",
        zip: "",
        city: ""
      }
    };
  }

  componentWillMount = async () => {
    try {
      var userData = await AsyncStorage.getItem("user");
      if (userData) {
        this.setState({
          user: JSON.parse(userData)
        });
      }
    } catch (error) {
      console.log(eoor);
    }
  };

  validateForm() {
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneRegex = /^[6-9]\d{9}$/;
    var zipRegex = /^(\d{4}|\d{6})$/;
    var cityRegex = /^[a-zA-Z]+$/;

    if (
      this.state.user.number.length != 0 &&
      !nameRegex.test(this.state.user.name)
    ) {
      alert("name is invalid");
      return false;
    } else if (
      this.state.user.number.length != 0 &&
      !emailRegex.test(this.state.user.email)
    ) {
      alert("email is invalid");
      return false;
    } else if (
      this.state.user.number.length != 0 &&
      !phoneRegex.test(this.state.user.number)
    ) {
      alert("number is invalid");
      return false;
    } else if (
      this.state.user.zip.length != 0 &&
      !zipRegex.test(this.state.user.zip)
    ) {
      alert("zip code is invalid");
      return false;
    } else if (
      this.state.user.number.length != 0 &&
      !cityRegex.test(this.state.user.city)
    ) {
      alert("city name is invalid");
      return false;
    }
    return true;
  }

  updateUser = async () => {
    if (this.validateForm()) {
      try {
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(this.state.user)
        ).then(() => {
          alert("your value is updated");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Form" />
        </Appbar.Header>

        <ScrollView style={styles.scrollContainer}>
          <TextInput
            style={styles.textInput}
            label="Name"
            placeholder="Name"
            defaultValue={this.state.user.name}
            mode="outlined"
            onChangeText={text => {
              const userObj = Object.assign(this.state.user, { name: text });
              this.setState({ user: userObj });
            }}
          />

          <TextInput
            style={styles.textInput}
            label="Email"
            keyboardType="email-address"
            mode="outlined"
            placeholder="Email"
            defaultValue={this.state.user.email}
            onChangeText={text => {
              const userObj = Object.assign(this.state.user, { email: text });
              this.setState({ user: userObj });
            }}
          />
          <TextInput
            style={styles.textInput}
            label="Contact Number"
            keyboardType="numeric"
            defaultValue={this.state.user.number}
            mode="outlined"
            placeholder="Contact number"
            onChangeText={text => {
              const userObj = Object.assign({}, this.state.user, {
                number: text
              });
              this.setState({ user: userObj });
            }}
          />
          <TextInput
            style={styles.textInput}
            label="Zip Code"
            keyboardType="numeric"
            placeholder="Zip Code"
            defaultValue={this.state.user.zip}
            mode="outlined"
            onChangeText={text => {
              const userObj = Object.assign({}, this.state.user, { zip: text });
              this.setState({ user: userObj });
            }}
          />
          <TextInput
            style={styles.textInput}
            label="City"
            placeholder="City"
            defaultValue={this.state.user.city}
            mode="outlined"
            onChangeText={text => {
              const userObj = Object.assign({}, this.state.user, {
                city: text
              });
              this.setState({ user: userObj });
            }}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={this.updateUser.bind(this)}
          >
            Save
          </Button>
        </ScrollView>
      </View>
    );
  }
}
