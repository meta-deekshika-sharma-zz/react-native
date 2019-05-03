/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import User from "./app/components/users";
import UserProfile from "./app/components/profile";
import Form from "./app/components/form";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const userStack = createStackNavigator({
  User: {
    screen: User
  },
  Profile: {
    screen: UserProfile
  }
});

const formStack = createStackNavigator({
  Form: {
    screen: Form
  }
});

const MainScreenNavigator = createBottomTabNavigator(
  {
    User: { screen: userStack },
    Form: { screen: formStack }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#9f9fa0",
      labelStyle: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#E91E63",
        borderTopWidth: 10,
        borderTopColor: "#ddd"
      }
    }
  }
);

const AppContainer = createAppContainer(MainScreenNavigator);
