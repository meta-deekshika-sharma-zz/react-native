import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './app/scene/Home';
import Profile from './app/scene/Profile';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;