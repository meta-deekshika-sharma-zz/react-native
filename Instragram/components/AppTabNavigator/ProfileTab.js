import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button
} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CardComponent from "../CardComponent";

var { width, height } = Dimensions.get("window");
var images = [
  require("../assets/feed_images/1.jpeg"),
  require("../assets/feed_images/2.jpg"),
  require("../assets/feed_images/3.jpg"),
  require("../assets/feed_images/4.jpg"),
  require("../assets/feed_images/5.jpg"),
  require("../assets/feed_images/6.jpg"),
  require("../assets/feed_images/7.jpeg"),
  require("../assets/feed_images/8.jpg"),
  require("../assets/feed_images/9.jpg"),
  require("../assets/feed_images/10.jpg"),
  require("../assets/feed_images/11.jpg")
];

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            index % 3 != 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
            { paddingBottom: 2 }
          ]}
        >
          <Image
            source={image}
            style={{ flex: 1, width: null, height: null }}
          />
        </View>
      );
    });
  };

  renderSectionTwo = () => {
    return images.map((index) => {
      return (
        <View>
          <CardComponent imageSource={images[index-1]} likes="200 likes" />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return <View>{this.renderSectionTwo()}</View>;
    }
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 20 }]}>
              deekshikasharma
            </Text>
          </Body>
          <Right>
            <EntypoIcon
              name="back-in-time"
              style={{ paddingRight: 10, fontSize: 32, color: "black" }}
            />
          </Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../assets/Ganesh.jpg")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                      20
                    </Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>Posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                      206
                    </Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>
                      Followers
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                      150
                    </Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>
                      Following
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      marginLeft: 10,
                      justifyContent: "center",
                      height: 30
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      height: 30,
                      marginRight: 10,
                      marginLeft: 5,
                      justifyContent: "center"
                    }}
                  >
                    <Icon name="settings" />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Deekshika Sharma
              </Text>
              <Text style={{ color: "black" }}>Engineer | Jaipur </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopCoor: "#eae5e5"
              }}
            >
              <Button transparent onPress={() => this.segmentClicked(0)}>
                <Icon
                  name="ios-apps"
                  style={[
                    this.state.activeIndex == 0
                      ? {}
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(1)}>
                <Icon
                  name="ios-list"
                  style={[
                    this.state.activeIndex == 1
                      ? {}
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(2)}>
                <Icon
                  name="ios-people"
                  style={[
                    this.state.activeIndex == 2
                      ? {}
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(3)}>
                <Icon
                  name="ios-bookmark"
                  style={[
                    this.state.activeIndex == 3
                      ? {}
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
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
    color: "black"
  }
});

export default ProfileTab;
