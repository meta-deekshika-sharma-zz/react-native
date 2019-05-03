import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

class Home extends Component {

    constructor() {
        super()
        this.state = {username: "", password: ""}
    }

    static navigationOptions = {
        header: null
    }

    checkLogin = () => {
        
        if (this.state.username == 'admin' && this.state.password == 'password123') {
            this.props.navigation.navigate('Dashboard')
        } else {
            Alert.alert('Error', 'Username/Password is incorrect', [{
                text: 'Okay'
            }])
        }
    }

    render() {
        const { container, editText, fieldBlock, heading, submitButton} = styles;
        return (
            <View style={container}>
                <View style={fieldBlock}>
                    <Text style={heading}>Username</Text>
                    <TextInput style={editText} onChangeText={text => this.setState({ username: text})}></TextInput>
                </View>
                <View style={fieldBlock}>
                    <Text style={heading}>Password</Text>
                    <TextInput secureTextEntry={true} style={editText} onChangeText={text => this.setState({ password: text})}></TextInput>
                </View>
                <View style={submitButton}>
                    <Button color="#515254" title="Login" onPress={this.checkLogin}></Button>
                </View>
            </View>
        )
    }
}

export default Home