import React, { Component } from 'react';
import { View, StyleSheet, Vibration, TouchableOpacity, Text, AccessibilityInfo, Keyboard, TextInput } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isConnected: false,
      type: "idk",
      screenReaderEnabled: false,
    }
  }

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled,
    );
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      this.setState({screenReaderEnabled});
    });
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow()
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide()
    );
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled,
    );
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert("Keyboard Shown");
  }

  _keyboardDidHide() {
    alert("Keyboard Hidden");
  }

  _handleScreenReaderToggled = (screenReaderEnabled) => {
    this.setState({screenReaderEnabled});
  };

  networkStatus() {
    NetInfo.fetch().then(state => {
      this.setState({ type: state.type });
      this.setState({ isConnected: state.isConnected });
    });
    const { type, isConnected } = this.state;
    return(
      <View>
        <Text style={[styles.text, { color: '#4287f5', paddingTop: 8}]}>
          Connection Type: {type}
        </Text>
        <Text style={{
          color: isConnected ? "#00FF00" : "#FF0000",
          fontSize: 20,
          paddingTop: 8
          }}>
            Is Connected: {isConnected ? "true" : "false"}
        </Text>
      </View>
    );
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => Vibration.vibrate([1000, 2000, 3000], true)} style={{ paddingTop: 8}}>
          <Text style={[styles.text, { color: '#4287f5'}]}>Start vibration</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => Vibration.cancel()} style={{ paddingTop: 8}}>
          <Text style={[styles.text, { color: '#90d4cf'}]}>Stop vibration</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { color: '#ed6053', paddingTop: 8}]}>
          The screen reader is{' '}
          {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
        </Text>
        {this.networkStatus()}
        <Text style={[styles.text, { color: '#6847ed', paddingTop: 8}]}>Keyboard Events</Text>
        <TextInput placeholder="Click Here..." onSubmitEditing={Keyboard.dismiss} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});