import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {Icon} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import LikesTab from './AppTabNavigator/LikesTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

class MainScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppTabNavigator/>
        );
    }
}

const AppNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showIcon: true,
        showLabel: false
    }
})

const AppTabNavigator = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainScreen;
