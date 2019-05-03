import React, { Component } from 'React';
import { Provider as PaperProvider, Card, IconButton, Button, Colors } from 'react-native-paper';
import { ImageBackground, Image, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default class UserProfile extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PaperProvider>
                <ImageBackground source={require('./assets/purple_light_7.png')} style={styles.backgroundImage}>
                    <Image
                        style={styles.profileImage}
                        source={require('./assets/profile.png')}
                    />
                    <Text style={styles.text}>Jimmy Baba</Text>
                </ImageBackground>
                <View style={{ flex: 7 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.tab}>
                            <Text style={styles.buttonText}>Profile</Text>
                        </View>
                        <View style={styles.tab}>
                            <Text style={styles.buttonText}>Chats</Text>
                        </View>
                        <View style={styles.tab}>
                            <Text style={styles.buttonText}>Contacts</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <View style={styles.buttonContainer}>
                            <Icon name="chat" color='#6200ee'></Icon>
                            <Text style={[styles.buttonText, color = '#6200ee']}>Chats</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Icon name="group"></Icon>
                            <Text style={styles.buttonText}>Groups</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Icon name="edit"></Icon>
                            <Text style={styles.buttonText}>Status</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.buttonContainer}>
                            <Icon name="person"></Icon>
                            <Text style={styles.buttonText}>Contacts</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Icon name="mail"></Icon>
                            <Text style={styles.buttonText}>Invite</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Icon name="settings"></Icon>
                            <Text style={styles.buttonText}>Settings</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.addIcon}
                            source={require('./assets/add.png')}
                        />
                    </View>
                </View>
            </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 100,
        height: 100
    },
    addIcon: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 30
    },
    buttonContainer: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        height: 100
    },
    buttonText: {
        color: '#000000',
        fontSize: 15,
        alignSelf: 'center'
    },
    tab: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        height: 50
    }
})