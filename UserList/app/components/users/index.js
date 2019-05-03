import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import styles from "./styles";

export default class User extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ""
    };
  }

  componentDidMount() {
    return fetch("http://10.0.2.2:3000/users")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  goToProfile(id) {
    this.props.navigation.navigate("Profile", {
      itemId: id
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
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator style={styles.progress} />
        </View>
      );
    }
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Users" />
        </Appbar.Header>
        <FlatList
          style={styles.flatList}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.listItem}
              onPress={() => this.goToProfile(item.id)}
            >
              <View style={{ flex: 2 }}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={this.getImage(item.picture)}
                  />
                </View>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemEmail}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
