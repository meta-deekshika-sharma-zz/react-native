import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardComponent from "../CardComponent";

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={{ backgroundColor: "white" }}>
            <Left>
              <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
            </Left>
            <Body>
              <Text style={[styles.text, { fontWeight: "bold", fontSize: 20 }]}>
                Instragram
              </Text>
            </Body>
            <Right>
              <Icon name="ios-send" style={{ paddingRight: 10 }} />
            </Right>
          </Header>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={[styles.text, { fontWeight: "bold" }]}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  Watch All
                </Text>
              </View>
            </View>

            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingHorizontal: 5
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/4.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/5.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/6.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../assets/thumbnail/7.jpg")}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource={require('../assets/rose_blue_flower.jpeg')} likes="100 likes" />
          <CardComponent imageSource={require('../assets/thumb_audio.jpg')} likes="200 likes" />
          <CardComponent imageSource={require('../assets/pexels_photo.jpeg')} likes="300 likes" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "black"
  }
});

export default HomeTab;
