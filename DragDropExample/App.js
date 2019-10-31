/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text,
  Dimensions
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this._animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0}
    this._animatedValue.addListener((value) => this._value = value);
    this.state = {
      showDraggable: true,
      opacity: new Animated.Value(1)
    }
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this._animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        this._animatedValue.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this._animatedValue.x, dy: this._animatedValue.y}
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        if(this.isDropArea(gestureState)){
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000
          }).start(() =>
            this.setState({
               showDraggable: false
            })
          );
        } else {
          Animated.spring(this._animatedValue, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
      },
    })
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  render() {
    const animatedStyle = {
      transform: this._animatedValue.getTranslateTransform()
    }
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <View style={styles.dropZone}>
          <Text style={styles.textStyle}>Drop Here</Text>
        </View>
        <Animated.View style={[ animatedStyle, styles.draggableZone]}>
          <View style={styles.draggableItem}></View>
        </Animated.View>
      </View>
    );
  }
};

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  dropZone: {
    height: height/4,
    width: width,
    backgroundColor: '#329ea8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  draggableZone: {
    height: height*3/4,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  draggableItem: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#329ea8'
  }
});
