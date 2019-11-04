import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'; 
import { LoginButton } from 'react-native-fbsdk';

export default class Profile extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super()
        this.state = {
            name: '',
            pic: ''
        }
    }

    componentWillMount() {
        this.setState({
            name: this.props.navigation.getParam('userName', 0),
            pic: this.props.navigation.getParam('userPic', 0)
        })
    }

    render() {
        return(
            <View style={ styles.container } >
                <Text style={ [{marginTop: 50}, styles.text] }>Welcome</Text>
                <Text style={ styles.text }>{this.state.name}</Text>
                <Image source={{ uri: this.state.pic }} style={ styles.image }></Image>
                <LoginButton
                    onLogoutFinished={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: 'italic'
    },
    image: {
        marginTop: 10,
        marginBottom: 10,
        height: 200,
        width: 200,
        resizeMode: 'contain'
    }
});

