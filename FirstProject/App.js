/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, Dimensions } from 'react-native';
import Blink from './components/Blink';
import CustomButton from './components/CustomButton';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// var width = Dimensions.get('window').width;
// export default class App extends Component<Props> {

//   constructor() {
//     super()
//     this.state = {
//       'productCount': 0
//     }
//   }

//   addProduct = () => {
//     this.setState((previousState) => (
//       { 'productCount': previousState.productCount + 1 })
//     )
//   }

//   onUsernameChanged = () => {

//   }

//   onPasswordChanged = () => {

//   }
//   render() { 
    
//     // let pic = {
//     //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     // };
//     // return (
//     //   <Image source={pic} style={{width: 200, height: 100}}/>
//     // );
//    return (
//       // < View >
//       //   <Blink text="Hii" />
//       //   <Blink text="How are you??" />
//       // </View >
//       // <View>
//       //   <CustomButton onPress={this.addProduct} />
//       //   <Text>{this.state.productCount}</Text>
//       // </View>
//       <View>
//         <Text style={styles.welcome}>Hello World!!!</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#020b19',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#2F0746',
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     textDecorationLine: 'underline'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   fieldBlock: {
//     marginVertical: 10,
//     marginHorizontal: 20
//   },
//   heading: {
//     color: '#fcfdff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     fontFamily: 'Times New Roman',
//     marginBottom: 3,
//     marginStart: 3
//   },
//   editText: {
//     backgroundColor: '#ffffff',
//     borderColor: '#000000',
//     borderWidth: 1,
//     height: 40,
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 15,
//     paddingStart: 10
//   },
//   submitButton: {
//     position: 'absolute',
//     bottom: 0,
//     width: width,
//   }
// });

// export default createStackNavigator ({
//   home: Home,
//   dashboard: Dashboard
// })

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Dashboard: {screen: Dashboard},
});

const App = createAppContainer(MainNavigator);

export default App;