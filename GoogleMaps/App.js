/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {

  constructor() {
    super() 
    this.state = {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }

  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Accessing Permission',
          message:
            'App needs access to your location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    }
     catch (err) {
      console.warn(err);
    }

    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, error => {
      console.log(error.message)
      }, { enableHighAccuracy: false, timeout: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          title="Title"
          description="Description"
        />
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
