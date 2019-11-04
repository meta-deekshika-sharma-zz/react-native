/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Image,
  Dimensions,
  Text
} from 'react-native';

export default class App extends Component {

  constructor() {
    super();
    this._animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0}
    this._animatedValue.addListener((value) => this._value = value);
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
        this._animatedValue.flattenOffset();
        Animated.spring(this._animatedValue, {
          toValue: { x: 0, y: 0 },
          friction: 20
        }).start();
      },
    })
  }
  render() {

    const animatedStyle = {
      transform: this._animatedValue.getTranslateTransform()
    }
    return (
      <View style={ styles.container} {...this._panResponder.panHandlers}>
        <Animated.View style={[ animatedStyle, styles.imageContainer ]}>
          <Image style={{ height: 150, width: 150 }} source={require("./assets/flower.jpg")}></Image>
        </Animated.View>
      </View>
    );
  }
};

const { height, width } = Dimensions.get('window'); 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3283a8'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

