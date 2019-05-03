import React, { Component } from 'React';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default class FetchListExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: ""
        }
    }
    //http://10.0.2.2:3000/data
    //https://facebook.github.io/react-native/movies.json
    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                });
            })
            .catch((error) => {
                console.error(error)
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator style={styles.progress} />
                </View>
            )
        }
        return (
            <View>
                <FlatList data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{item.releaseYear}</Text>
                        </View>}
                    keyExtractor={({ id }, index) => id}></FlatList>
                {/* <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progress: {
        flex: 1,
        justifyContent: 'center'
    }
})