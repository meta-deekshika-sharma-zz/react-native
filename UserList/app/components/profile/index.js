import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";
import { Appbar, TextInput, Button } from "react-native-paper";

export default class UserProfile extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.navigate("User");
  }

  componentDidMount() {
    fetch("http://10.0.2.2:3000/users")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          item: responseJson[this.props.navigation.getParam("itemId", 0) - 1]
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getImage = image => {
    switch (image) {
      case "Ganesh":
        return require("../assets/Ganesh.jpg");
      case "pexels_photo":
        return require("../assets/pexels_photo.jpeg");
      case "rose_blue_flower":
        return require("../assets/rose_blue_flower.jpeg");
      case "Swan_large":
        return require("../assets/Swan_large.jpg");
      case "thumb_audio":
        return require("../assets/thumb_audio.jpg");
    }
  };

  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={this.goBack} />
          <Appbar.Content title="Profile" />
        </Appbar.Header>

        <ScrollView style={styles.scrollContainer}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={this.getImage(this.state.item.picture)}
              />
            </View>
          </View>

          <TextInput
            style={styles.textInput}
            label="Name"
            disabled={true}
            value={this.state.item.name}
            mode="outlined"
          />

          <TextInput
            style={styles.textInput}
            label="Email"
            disabled={true}
            value={this.state.item.email}
            mode="outlined"
          />
          <TextInput
            style={styles.textInput}
            label="Contact Number"
            disabled={true}
            value={this.state.item.number}
            mode="outlined"
          />
          <TextInput
            style={styles.textInput}
            label="Zip Code"
            disabled={true}
            value={this.state.item.zip}
            mode="outlined"
          />
          <TextInput
            style={styles.textInput}
            label="City"
            disabled={true}
            value={this.state.item.city}
            mode="outlined"
          />
        </ScrollView>
      </View>
    );
  }
}
