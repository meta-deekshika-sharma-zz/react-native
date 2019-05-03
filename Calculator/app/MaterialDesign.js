import React, { Component } from 'React';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar, Banner, Avatar, Button, Card, Title, Paragraph, IconButton, Checkbox, Colors, List } from 'react-native-paper';

export default class FetchListExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: "true",
            checked: "false",
            expanded: true
        }
    }

    _goBack = () => console.log('Went back');

    _onSearch = () => console.log('Searching');

    _onMore = () => console.log('Shown more');

    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

    render() {

        const { checked } = this.state;
        return (

            <PaperProvider>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Title"
                        subtitle="Subtitle"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch} />
                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>

                {/* <Banner
                    visible={this.state.visible}
                    actions={[
                        {
                            label: 'Fix it',
                            onPress: () => this.setState({ visible: false }),
                        },
                        {
                            label: 'Learn more',
                            onPress: () => this.setState({ visible: false }),
                        },
                    ]}
                    image={({ size }) =>
                        <Image
                            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    }
                >
                    There was a problem processing a transaction on your credit card.
                </Banner> */}
                {/* <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    uncheckedColor = {Colors.redA700}
                    onPress={() => { this.setState({ checked: !checked }); }}
                /> */}
                <List.Section title="Accordions">
                    <List.Accordion
                        title="Uncontrolled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Controlled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={this.state.expanded}
                        onPress={this._handlePress}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>
                </List.Section>
            </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    last: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
});