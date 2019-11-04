import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class Home extends Component {

  static navigationOptions = {
    header: null
  };

  constructor() {
    super()
    this.state = {
      name : '',
      pic : ''
    }
  }

  initUser(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        name: json.name,
        pic: json.picture.data.url
      })
      this.props.navigation.navigate('Profile', {
        userName: this.state.name,
        userPic: this.state.pic
      });
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image style={ styles.image } source={require('../assets/facebook-app-icon.jpg')}/>
        <LoginButton
           publishPermissions={['publish_actions']}
           readPermissions={['public_profile']}
           onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.initUser(data.accessToken.toString())
                    console.log(data.accessToken.toString());
                  }
                )
              }
            }
          }/>
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
  image: {
    height: 200,
    width: 200
  }
});
