import React, { Component } from "react";
import { View, Text, StyleSheet, Picker, AppState } from "react-native";
import PushController from "./PushController";
import PushNotification from 'react-native-push-notification';


class NotificationPicker extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
    this.state = {
      seconds: 5
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === "background") {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", 
        date: new Date(Date.now() + (this.state.seconds * 1000)),
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose your Notification time in seconds</Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  picker: {
    width: 100
  }
});

export default NotificationPicker;
