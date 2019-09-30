import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("./assets/Ganesh.jpg")} />
            <Body>
              <Text style={styles.text}>deekshikasharma</Text>
              <Text note style={styles.text}>Jan 15, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={this.props.imageSource}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text style={styles.text}>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "900" }}>deekshikasharma</Text>
              Wherever you go, no
              matter what the weather, always bring your own sunshine.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
      color: 'black'
  }
});

export default CardComponent;
