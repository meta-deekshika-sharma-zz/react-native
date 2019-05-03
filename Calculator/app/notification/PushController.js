import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PushNotification from "react-native-push-notification";

class PushController extends Component {

  componentDidMount() {
    PushNotification.configure({
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
            //notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
    });
  }

  render() {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PushController;
