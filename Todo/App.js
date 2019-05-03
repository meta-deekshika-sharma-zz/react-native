/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Todo from "./src/Todo";
import store from "./src/store";
import { Provider } from "react-redux";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
